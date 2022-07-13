using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class intial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "maxpatientNo",
                table: "Works_in",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "maxpatientNo",
                table: "Works_in");
        }
    }
}
