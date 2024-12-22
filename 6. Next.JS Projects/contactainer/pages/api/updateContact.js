import ConnectDB from "@/db/Connect";
import Contact from "@/db/Models/Contact";


export default async function handler(req, res) {
    if (req.method==='PUT') {
        try {
        const newData = req.body
        const id = newData.id
        await ConnectDB()
        const UpdContact = await Contact.findById(id).exec()
        if (UpdContact) {
            const data = await Contact.findByIdAndUpdate(id,{$set:newData,new:true})
            res.status(200).json(
                {
                    success:true,
                    contactUpdated:true,
                    message:`Your contact was updated as follows ${data}`
                }
            )
        } else {
            res.status(404).json({
                success:true,
                ContactNotFound:true,
                message:"Contact you trying to update does not exists "
            })
        }
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success:false,
            IntServerError:true,
            message:"Internal Server Error ",
        }
)
    }
    } else {
        res.status(405).json({
            success:false,
            reqError:true,
            message:"please give a PUT request to continue"})
    }

}