using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class Visit_number_in_doctor_rating : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DoctorRating",
                table: "DoctorRating");

            migrationBuilder.AlterColumn<string>(
                name: "testType",
                table: "Record",
                type: "nvarchar(1)",
                maxLength: 1,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "summary",
                table: "Record",
                type: "varchar(max)",
                unicode: false,
                nullable: false,
                defaultValueSql: "('')",
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldUnicode: false);

            migrationBuilder.AlterColumn<string>(
                name: "prescription",
                table: "Record",
                type: "varchar(max)",
                unicode: false,
                nullable: false,
                defaultValueSql: "('')",
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldUnicode: false);

            migrationBuilder.AddColumn<int>(
                name: "VisitNumber",
                table: "DoctorRating",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_DoctorRating",
                table: "DoctorRating",
                columns: new[] { "PID", "DID", "VisitNumber" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DoctorRating",
                table: "DoctorRating");

            migrationBuilder.DropColumn(
                name: "VisitNumber",
                table: "DoctorRating");

            migrationBuilder.AlterColumn<string>(
                name: "testType",
                table: "Record",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1)",
                oldMaxLength: 1,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "summary",
                table: "Record",
                type: "varchar(max)",
                unicode: false,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldUnicode: false,
                oldDefaultValueSql: "('')");

            migrationBuilder.AlterColumn<string>(
                name: "prescription",
                table: "Record",
                type: "varchar(max)",
                unicode: false,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(max)",
                oldUnicode: false,
                oldDefaultValueSql: "('')");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DoctorRating",
                table: "DoctorRating",
                columns: new[] { "PID", "DID" });
        }
    }
}
