using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class recordUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Record",
                table: "Record");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Record",
                table: "Record",
                columns: new[] { "DID", "PID", "date" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Record",
                table: "Record");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Record",
                table: "Record",
                columns: new[] { "DID", "PID", "file_description" });
        }
    }
}
