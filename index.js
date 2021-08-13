require("dotenv").config();
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

exports.getDatabase = async function () {
  const response = await notion.databases.query({ database_id: databaseId });
  console.log(response);
  const responseResults = response.results.map((user) => {
    console.log(user)
    return {
      id: user.id,
      name: user.properties.Name.title[0]?.plain_text,
      role: user.properties.Roles.url[0].plain_text,
      unit: user.properties["Unit Member of"].rich_text[0]?.plain_text
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





