namespace MinimalAPI.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }

        public int Fono { get; set; }

        public Usuario(int id, string nombre, int fono)
        {
            Id = id;
            Nombre = nombre;
            Fono = fono;
        }
    }
}
