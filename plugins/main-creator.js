let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:MUSABOT;;\nFN:MUSABOT\nORG:MUSABOT\nTITLE:\nitem1.TEL;waid=51944026510:51944026510\nitem1.X-ABLabel:MUSABOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:MUSABOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@Alexnsnk7⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
