using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class update_works_in_table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in",
                column: "DID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in",
                columns: new[] { "DID", "start_time" });
        }
    }
}
