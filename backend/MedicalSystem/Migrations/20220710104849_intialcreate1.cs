using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class intialcreate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AppointmentStatus",
                table: "Visit",
                type: "int",
                nullable: true,
                computedColumnSql: "([dbo].[Appointment_Status](PID,DID,appointment_time))",
                stored: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AppointmentStatus",
                table: "Visit");
        }
    }
}
