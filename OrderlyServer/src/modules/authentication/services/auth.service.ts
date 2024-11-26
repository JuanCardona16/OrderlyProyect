import { DbCollections } from "@/config/constants";
import { getModel } from "@/config/infraestructure/functions";
import { Admin, AdminDto } from "@/config/models/Admin/entity/Admin.entity";
import AdminMongoSchema from "@/config/models/Admin/schema/Admin.schema";
import { jwtHelpers } from "@/config/security/security";
import { setError } from "@/helpers";

class AuthenticationServices {

  AdminRegister = async (data: AdminDto) => {

    const model = getModel<Admin>(DbCollections.ADMINS, AdminMongoSchema)

    const isAdminExist = await model.findOne({ email: data.email })

    if (isAdminExist) return setError(409, "Admin already exists")

    const newAdmin = new model(data)
    const adminInDb = await newAdmin.save()

    const token = jwtHelpers.generateToken<string>(adminInDb.uuid as string, adminInDb.rol)

    return token
  }

  AdminLogin = async () => {

  }

  logout = async () => {

  }

}

export default new AuthenticationServices();