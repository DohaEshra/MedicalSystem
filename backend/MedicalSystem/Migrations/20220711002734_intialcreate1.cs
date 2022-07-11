using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class intialcreate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AppointmentNo",
                table: "Visit",
                type: "int",
                nullable: true,
                computedColumnSql: "([dbo].[Set_Count_Patient](DID,appointment_time))",
                stored: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AppointmentNo",
                table: "Visit");
        }
    }
}
