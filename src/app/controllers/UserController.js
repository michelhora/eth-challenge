import User from '../models/User';
import  { Wallet } from 'ethers';
import QRCode from 'qrcode';

class UserController {
  async store(req, res) {
    const ualet = await Wallet.createRandom();
    const pKey = ualet.privateKey;
    
   const qr_code_url  = await QRCode.toDataURL(pKey).catch(function (e) {
     return res.status(500).json(e)
   });

  
    req.body.private_key = pKey;
    req.body.qr_code = qr_code_url;
   

    const { id, name, private_key, qr_code } = await User.create(req.body);
    
   
    return res.json({
      id,
      name,
      private_key,
      qr_code,
    });
  }

  async index(req, res) {
    const user = await User.findOne({where: private_key = req.body.private_key })
    
    return res.json({
      users
    });
  }

  async update(req, res) {
    const user = await User.findByPk(req.body.id);

    const { id, name, position } = await user.update(req.body);

    return res.json({
      id,
      name,
      position,
    });
  }
}

export default new UserController();
