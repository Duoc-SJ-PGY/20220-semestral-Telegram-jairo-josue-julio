using MinimalAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//-------------- Lista vacia para almacenar usuarios temporalmente ----------
List<Usuario> usuarios = new List<Usuario>();
//Usuario primero = new Usuario(1,"Juan",1333412);
//usuarios.Add(primero);

app.MapGet("/GetUsuarios", () =>
{
    return usuarios;
}
   );
app.MapPost("/PostUsuario", (Usuario usuario) =>
{
    if (usuario.Id == 0)
    return StatusCodes.Status404NotFound;
    var user = usuarios.Find(x => x.Id == usuario.Id);
    if(user != null)
    return StatusCodes.Status400BadRequest;
    usuarios.Add(usuario);
    return StatusCodes.Status200OK;
}
);
app.MapPut("/UpdateUsuario", (Usuario usuario) =>
{
    var user = usuarios.FirstOrDefault(x => x.Id == usuario.Id);
    if (user == null)
        return StatusCodes.Status404NotFound;
    user.Nombre = usuario.Nombre;
    user.Fono = usuario.Fono;
    return StatusCodes.Status200OK;
}
);
app.MapDelete("/DeleteUsuario", (int id) =>
{
    var user = usuarios.FirstOrDefault(x => x.Id == id);
    if (user == null)
        return StatusCodes.Status404NotFound;
    usuarios.Remove(user);
    return StatusCodes.Status200OK;

});

app.Run();


internal record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}