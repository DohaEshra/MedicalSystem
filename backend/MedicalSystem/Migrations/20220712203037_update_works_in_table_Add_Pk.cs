using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class update_works_in_table_Add_Pk : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in");

            migrationBuilder.AlterColumn<string>(
                name: "start_time",
                table: "Works_in",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in",
                columns: new[] { "DID", "start_time" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in");

            migrationBuilder.AlterColumn<string>(
                name: "start_time",
                table: "Works_in",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in",
                column: "DID");
        }
    }
}
