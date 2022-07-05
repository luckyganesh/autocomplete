const completionSpec: Fig.Spec = {
  name: "colima",
  description: "",
  subcommands: [
    {
      name: "start",
      description: "Start the colima with the options",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'colima my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for colima",
    },
  ],
  // Only uncomment if colima takes an argument
  // args: {}
};
export default completionSpec;
