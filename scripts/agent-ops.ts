// minimal stub replicating the CI helper invoked by pr-guard.yml
const argv = Bun.argv.slice(2)
console.log("agent-ops state invoked:", argv.join(" "))
process.exit(0)
