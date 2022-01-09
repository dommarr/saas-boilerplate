import { supabase } from "../../utils/supabase.js";

const handler = async (req, res) => {
  await supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
