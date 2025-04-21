let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `☁️⋆ 𝗜𝗡𝗧𝗘𝗚𝗥𝗔𝗡𝗧𝗘𝗦 ⨾${pesan}`
  let teks = `🩵⋆ 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 ⋆
  🛍️ 𝗔𝗱𝗾𝘂𝗶𝗲𝗿𝗲 𝗲𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻 ⨾
 ↳ wa.me/+51944026510\n\n ${oi}\n\n`
  for (let mem of participants) {
  teks += `￫ 🔱 @${mem.id.split('@')[0]}\n`}
  teks += `➽ 𝗠𝗨𝗦𝗔 𝗕𝗢𝗧`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler