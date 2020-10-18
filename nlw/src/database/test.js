const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserird ados na tabela
  await saveOrphanage(db, {
    lat: "-29.4144252",
    lng: "-51.9637496",
    name: "Lar dos meninos",
    about: "Presta assistencia...",
    whatsapp: "5154654654",
    images: [
      "https://images.unsplash.com/photo-1554312879-371d7377dea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1554312879-371d7377dea0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "Venha...",
    opening_hours: "Horário de visitas....",
    open_on_weenkends: "1",
  });

  //consultas dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar os dados comente de 1 orfanato, por ID
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2" ');
  console.log(orphanage);

//deletar dado da tabela 

//console.log(await db.run("Delete from orphanages WHERE id = '4'"))
//console.log(await db.run("Delete from orphanages WHERE id = '5'"))

});
