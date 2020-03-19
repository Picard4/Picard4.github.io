<#
The first function kills every last process that has a specific name (such as Notepad).
The second function pretends to delete files that have a random letter in a specific area.
#>
Function KillThatProcess ([string]$ProcessString) {
    $Process = Get-Process $ProcessString
    $AmountOfProcesses = $Process.Count
    
    # Write to user
    Write-Host "There are $AmountOfProcesses processes with the name $ProcessString. Proceed? "
    Write-Host -NoNewline -BackgroundColor Green -ForegroundColor Blue "Y"
    Write-Host -NoNewline "/"
    Write-Host -NoNewline -BackgroundColor Red -ForegroundColor Yellow "N"
    $UserChoice = Read-Host 

    $UserChoice = $UserChoice.ToLower()
    if($UserChoice -ceq "y")
    {
      # If the user enters y
      Write-Host -BackgroundColor Green -ForegroundColor Blue "Killing every last one of them"
      $Process | kill 
    }
    else
    {
      #If the user does not enter y
      Write-Host -BackgroundColor Red -ForegroundColor Yellow "No processes were killed"
    }
    Write-Host "End of KillThatProcess"
    Read-Host
}

Function Bamboozle ([string]$FilePath = "./*") {
    echo $FilePath
    $RandomNumber = Get-Random -Minimum 65 -Maximum 91
    $RandomLetter = [char]$RandomNumber
    # Write to user
    Write-Host -BackgroundColor Red "Any files with the letter $RandomLetter need to be sent to Gay Baby Jail due to some virus, but the idiot who coded this doesn't know how to move files."
    Write-Host -NoNewline -BackgroundColor Red "Instead of looking it up, these files (and System32) will instead be "
    Write-Host -NoNewline -BackgroundColor Red -ForegroundColor Yellow "deleted."
    Write-Host
    $DeadFiles = Get-ChildItem –Path $FilePath "*$RandomLetter*"
    if($DeadFiles -ne $null)
    {
       $DeadFiles | Where-Object { $_ -is [System.IO.FileInfo] } | Remove-Item -WhatIf
       Write-Host -BackgroundColor Green "The files would have been deleted, but as an owner of RNG Hell you've suffered enough, so they were spared."
    }
    else {
        Write-Host -BackgroundColor Green "No files were detected, so this process accomplished absolutely nothing."
    }
    Read-Host "End of Bamboozle"
}