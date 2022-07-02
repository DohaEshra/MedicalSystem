using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class recordmigrate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Record",
                table: "Record");

            migrationBuilder.DropColumn(
                name: "FNO",
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

            migrationBuilder.AddColumn<int>(
                name: "FNO",
                table: "Record",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Record",
                table: "Record",
                columns: new[] { "DID", "PID", "date", "FNO" });
        }
    }
}
