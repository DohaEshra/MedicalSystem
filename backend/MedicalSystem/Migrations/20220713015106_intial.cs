using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedicalSystem.Migrations
{
    public partial class intial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "Doctor",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Fname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        Lname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        age = table.Column<int>(type: "int", nullable: true, computedColumnSql: "(datediff(year,[birthDate],getdate()))", stored: false),
            //        email = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
            //        phone = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        password = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
            //        category = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        DoctorRating = table.Column<int>(type: "int", nullable: true, computedColumnSql: "([dbo].[getDoctorRating]([ID]))", stored: false),
            //        area = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        birthDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "('0001-01-01T00:00:00.0000000')"),
            //        buildingNumber = table.Column<int>(type: "int", nullable: true),
            //        city = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false, defaultValueSql: "('')"),
            //        gender = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: false, defaultValueSql: "(N'')"),
            //        profilePic = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        street = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Doctor", x => x.ID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Others",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        street = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
            //        Fname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        Lname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        age = table.Column<int>(type: "int", nullable: true, computedColumnSql: "(datediff(year,[birthDate],getdate()))", stored: false),
            //        email = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
            //        phone = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        password = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
            //        area = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        birthDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "('0001-01-01T00:00:00.0000000')"),
            //        buildingNumber = table.Column<int>(type: "int", nullable: true),
            //        city = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false, defaultValueSql: "('')"),
            //        profilePic = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        job = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Others", x => x.ID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Patient",
            //    columns: table => new
            //    {
            //        ID = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        street = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
            //        Fname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        Lname = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
            //        age = table.Column<int>(type: "int", nullable: true, computedColumnSql: "(datediff(year,[birthDate],getdate()))", stored: false),
            //        email = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
            //        phone = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        password = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false),
            //        area = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
            //        birthDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "('0001-01-01T00:00:00.0000000')"),
            //        buildingNumber = table.Column<int>(type: "int", nullable: true),
            //        city = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false, defaultValueSql: "('')"),
            //        gender = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: false, defaultValueSql: "(N'')"),
            //        profilePic = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Patient", x => x.ID);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Works_in",
            //    columns: table => new
            //    {
            //        DID = table.Column<int>(type: "int", nullable: false),
            //        start_time = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false, defaultValueSql: "(N'')"),
            //        end_time = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Works_in_1", x => new { x.DID, x.start_time });
            //        table.ForeignKey(
            //            name: "FK_Works_in_Doctor1",
            //            column: x => x.DID,
            //            principalTable: "Doctor",
            //            principalColumn: "ID");
            //    });

            //migrationBuilder.CreateTable(
            //    name: "DoctorRating",
            //    columns: table => new
            //    {
            //        PID = table.Column<int>(type: "int", nullable: false),
            //        DID = table.Column<int>(type: "int", nullable: false),
            //        VisitNumber = table.Column<int>(type: "int", nullable: false),
            //        Rating = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_DoctorRating", x => new { x.PID, x.DID, x.VisitNumber });
            //        table.ForeignKey(
            //            name: "FK_DoctorRating_Doctor",
            //            column: x => x.DID,
            //            principalTable: "Doctor",
            //            principalColumn: "ID",
            //            onDelete: ReferentialAction.Cascade);
            //        table.ForeignKey(
            //            name: "FK_DoctorRating_Patient",
            //            column: x => x.PID,
            //            principalTable: "Patient",
            //            principalColumn: "ID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Record",
            //    columns: table => new
            //    {
            //        DID = table.Column<int>(type: "int", nullable: false),
            //        PID = table.Column<int>(type: "int", nullable: false),
            //        date = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        FNO = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
            //        file_description = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
            //        attached_files = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
            //        summary = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false, defaultValueSql: "('')"),
            //        OID = table.Column<int>(type: "int", nullable: true),
            //        prescription = table.Column<string>(type: "varchar(max)", unicode: false, nullable: false, defaultValueSql: "('')"),
            //        testType = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Record", x => new { x.DID, x.PID, x.date, x.FNO });
            //        table.ForeignKey(
            //            name: "FK_Record_Doctor1",
            //            column: x => x.DID,
            //            principalTable: "Doctor",
            //            principalColumn: "ID");
            //        table.ForeignKey(
            //            name: "FK_Record_Others",
            //            column: x => x.OID,
            //            principalTable: "Others",
            //            principalColumn: "ID",
            //            onDelete: ReferentialAction.SetNull);
            //        table.ForeignKey(
            //            name: "FK_Record_Patient",
            //            column: x => x.PID,
            //            principalTable: "Patient",
            //            principalColumn: "ID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Visit",
            //    columns: table => new
            //    {
            //        PID = table.Column<int>(type: "int", nullable: false),
            //        DID = table.Column<int>(type: "int", nullable: false),
            //        appointment_time = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        AppointmentNo = table.Column<int>(type: "int", nullable: true),
            //        AppointmentStatus = table.Column<int>(type: "int", nullable: true, computedColumnSql: "([dbo].[Appointment_Status]([PID],[DID],[appointment_time]))", stored: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Visit", x => new { x.PID, x.DID, x.appointment_time });
            //        table.ForeignKey(
            //            name: "FK_Visit_Doctor",
            //            column: x => x.DID,
            //            principalTable: "Doctor",
            //            principalColumn: "ID");
            //        table.ForeignKey(
            //            name: "FK_Visit_Patient",
            //            column: x => x.PID,
            //            principalTable: "Patient",
            //            principalColumn: "ID",
            //            onDelete: ReferentialAction.Cascade);
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Doctor",
            //    table: "Doctor",
            //    column: "email",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "X_Doctor",
            //    table: "Doctor",
            //    column: "phone",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_DoctorRating_DID",
            //    table: "DoctorRating",
            //    column: "DID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Others",
            //    table: "Others",
            //    column: "email",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_Patient",
            //    table: "Patient",
            //    column: "email",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "X_Patient",
            //    table: "Patient",
            //    column: "phone",
            //    unique: true);

            //migrationBuilder.CreateIndex(
            //    name: "IX_Record_OID",
            //    table: "Record",
            //    column: "OID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Record_PID",
            //    table: "Record",
            //    column: "PID");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Visit_DID",
            //    table: "Visit",
            //    column: "DID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorRating");

            migrationBuilder.DropTable(
                name: "Record");

            migrationBuilder.DropTable(
                name: "Visit");

            migrationBuilder.DropTable(
                name: "Works_in");

            migrationBuilder.DropTable(
                name: "Others");

            migrationBuilder.DropTable(
                name: "Patient");

            migrationBuilder.DropTable(
                name: "Doctor");
        }
    }
}
