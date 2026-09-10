Set oWS = WScript.CreateObject("WScript.Shell")
currDir = WScript.Arguments(0)
sDesktop = oWS.SpecialFolders("Desktop")
Set oLink = oWS.CreateShortcut(sDesktop & "\VinaMath 2026.lnk")
oLink.TargetPath = currDir & "Chay_VinaMath.bat"
oLink.WorkingDirectory = currDir
oLink.Description = "He Thong Hoc Lieu Toan Hoc VinaMath 2026"
ico = currDir & "public\favicon.ico"
If CreateObject("Scripting.FileSystemObject").FileExists(ico) Then
    oLink.IconLocation = ico & ",0"
End If
oLink.Save
