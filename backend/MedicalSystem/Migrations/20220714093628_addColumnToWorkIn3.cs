using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class addColumnToWorkIn3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in");

            migrationBuilder.AlterColumn<string>(
                name: "start_time",
                table: "Works_in",
                type: "varchar(100)",
                unicode: false,
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(100)",
                oldUnicode: false,
                oldMaxLength: 100,
                oldDefaultValueSql: "(N'')");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in",
                columns: new[] { "DID", "W_ID" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in");

            migrationBuilder.AlterColumn<string>(
                name: "start_time",
                table: "Works_in",
                type: "varchar(100)",
                unicode: false,
                maxLength: 100,
                nullable: false,
                defaultValueSql: "(N'')",
                oldClrType: typeof(string),
                oldType: "varchar(100)",
                oldUnicode: false,
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Works_in_1",
                table: "Works_in",
                columns: new[] { "DID", "start_time" });
        }
    }
}
