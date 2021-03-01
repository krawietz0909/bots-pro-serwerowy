module.exports = {
    name: "clear",
    description: "delete messages in channel.",
    args: true,
    // !clear <amount>
    usage: "<amount>",
  
    run(msg, args) {
      const { channel } = msg
      
      const amount = parseInt (args[0])
      
      if (!Number.isInteger(amount)) {
        return channel.send("Musisz podać **LICZBĘ** wiadomości które chcesz ususnąć min 2 max 100")
      }

      if (amount < 2 || amount > 100) {
        return channel.send("```MINIMUM 2 MAXIMUM 100 WIADOMOŚCI KTÓRE MOŻESZ USUNĄĆ!```"
        )
      }

      channel.bulkDelete(amount)
    },
  }