import ConnectDB from "@/db/Connect";
import Contact from "@/db/Models/Contact";


export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const {id} = req.query
    try {
        await ConnectDB()
        const delContact = await Contact.findById(id).exec()
        if (delContact) {
            const delContact= await Contact.findByIdAndDelete(id)
            res.status(200).json({
                success:true,
                ContactDeleted:true,
                message:`The contact ${delContact} was successfully deleted`
            }) 
        } else {
            res.status(404).json({
                success:true,
                dataNotFound:true,
                message:"The Contact you are trying to delete does not exists"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            IntServerError:true,
            message:"Internal Server Error Occurred"
        })
        
    }
    } else {
        res.status(405).json({
            success:false,
            reqError:true,
            message:"please give a DELETE request to continue"})
    }
}