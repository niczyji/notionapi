require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;


function urlParam(params) {
  var string = "https://www.notion.so/House-of-Stories-1f06dd726a8e4e3db725d88905fd5aed"
  var string1 = 'https://www.notion.so/Die-Gef-hrten-d8f05831c73a4bb38c894c6f55945cad';
  var length = string.length;
  console.log(string1.substring(22, string1.length-33 ).replace(/-/g, " ").replace(/f h/g, 'faeh'));
  console.log(length);
}

exports.getDatabase = async function () {
  const response = await notion.databases.query({ database_id: databaseId });
  console.log(response);
  const responseResults = response.results.map((user) => {
    return {
      id: user.id,
      name: user.properties.Name.title[0]?.plain_text,
      unit: user.properties["Unit Member of"].rich_text[0]?.plain_text,
      roleMember: user.properties.Roles.url
        ? user.properties.Roles.url
        : "No Roles",
      roleOwner: user.properties["Unit Owner of"].url
        ? user.properties["Unit Owner of"].url
        : "No Roles",
    };
  });

  return responseResults;
};

// Add New Item
/* async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Yurts in Big Sur, California") */
