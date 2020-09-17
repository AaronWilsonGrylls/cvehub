//
// 默认代码模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
  show_databases: {
    _: 'yv66vgAAADMBLwoAQgB9BwB+CgACAH8KAAIAgAgAgQkAXACCCACDCQBcAIQIAIUJAFwAhgcAhwgAiAoACwCJCACKCACLCACMCACNCACOCwCPAJALAJEAkgsAjwCSBwCTCgAWAH0LAJEAlAoAFgCVCgAWAJYKAFwAlwoAXACYCgALAJkKAFwAmgoACwCWCgACAJsKAJwAnQcAnggAnwoAIgCWCACgCgAnAKEHAKIKACcAowoAJwCkCgClAKYKACcApwgAqAgAqQoAJwCqBwCrCgAnAKwKAC8ArQoAJwCuCgAnAK8KABYAsAgAsQoALwCyCACzCgAvALQIALUKALYAtwgAuAoAJwC5CAC6CgBAALsIALwHAL0KAEAAvgcAvwoAwADBCgBCAMIIAHIHAMMIAMQKAEAAxQoAxgDHCADICgAnAMkIAMoIAMsKACcAzAoAJwDNCADOCgDPANALANEA0gsA0wDUCwDVANYLANcA2AsA1wDZCwDVANoLANUA2wgA3AgA3QoAXADeBwDfAQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAGPGluaXQ+AQADKClWAQAEQ29kZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHAN8HAL8HAH4HAOAHAOEHAIcHAKIHAJ4BAAJFQwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABmRlY29kZQcAqwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAOIHAOMHAOQHAOUHAOYBAA1zaG93RGF0YWJhc2VzAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsMAGEAYgEAHWphdmF4L3NlcnZsZXQvanNwL1BhZ2VDb250ZXh0DADnAOgMAOkA6gEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABgAF4BAAZiYXNlNjQMAF0AXgEAD2FudHN3b3JkQ2hhcnNldAwAXwBeAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAYQDrAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAAl0ZXh0L2h0bWwHAOEMAOwA6wcA4AwA7QDrAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIMAO4A7wwA8ADxDADyAPMMAHIAcAwAbwBwDADwAPQMAHsAfAwA9QD2BwD3DAD4AOsBABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAJRVJST1I6Ly8gAQADaGV4DABkAGUBABBqYXZhL2xhbmcvU3RyaW5nDAD5APoMAGEA+wcA/AwA/QD+DAD/AQABAARudWxsAQAQMDEyMzQ1Njc4OUFCQ0RFRgwBAQDzAQAdamF2YS9pby9CeXRlQXJyYXlPdXRwdXRTdHJlYW0MAQIBAwwAYQEEDAEFAQYMAQcBCAwA8AEJAQABLAwBCgEEAQAFVVRGLTgMAPIA7wEADGphdmEudmVyc2lvbgcBCwwBDADvAQADMS45DAENAP4BABBqYXZhLnV0aWwuQmFzZTY0DAEOAQ8BAApnZXREZWNvZGVyAQAPamF2YS9sYW5nL0NsYXNzDAEQAREBABBqYXZhL2xhbmcvT2JqZWN0BwESDAETARQMARUBFgEAAltCAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgwBFwEYBwEZDAEaARsBAAxkZWNvZGVCdWZmZXIMARwA8wEAAg0KAQABCgwBHQEeDAEfASABABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwEhDAEiASMHAOMMASQBJQcA5AwBJgEnBwDlDAEoASkHAOYMASoBAwwBKwEADAEsAS0MAS4BAAEADnNob3cgZGF0YWJhc2VzAQABCQwAdAB1AQAOU2hvd19kYXRhYmFzZXMBABxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0AQAdamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2UBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAKZ2V0UmVxdWVzdAEAICgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3Q7AQALZ2V0UmVzcG9uc2UBACEoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZTsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAZhcHBlbmQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAZnZXRPdXQBAB8oKUxqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXI7AQAbamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBAAt0b1VwcGVyQ2FzZQEABmxlbmd0aAEAAygpSQEABChJKVYBAAZjaGFyQXQBAAQoSSlDAQAHaW5kZXhPZgEABChJKUkBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAFd3JpdGUBABBqYXZhL2xhbmcvU3lzdGVtAQALZ2V0UHJvcGVydHkBAAljb21wYXJlVG8BAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEACWdldE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABZnZXREZWNsYXJlZENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3I7AQAdamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3IBAAtuZXdJbnN0YW5jZQEAJyhbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAhAFwAQgAAAAMAAQBdAF4AAAABAF8AXgAAAAEAYABeAAAABgABAGEAYgABAGMAAAARAAEAAQAAAAUqtwABsQAAAAAAAQBkAGUAAQBjAAABbwAFAA0AAAEnK8AAAk0stgADTiy2AAQ6BCoSBbUABioSB7UACCoSCbUACrsAC1kSDLcADToFuwALWRIMtwANOgYSDjoHEg86CBIQOgkSEToKGQQSErkAEwIALSq0AAq5ABQCABkEKrQACrkAFQIAKiq7ABZZtwAXLRkJuQAYAgC2ABkSDLYAGbYAGiq0AAgqtAAKtgAbKrQACCq0AAq2ABw6CyoquwAWWbcAFy0ZCrkAGAIAtgAZEgy2ABm2ABoqtAAIKrQACrYAGyq0AAgqtAAKtgAcOgwZBRkHtgAdVxkGKhkLGQy2AB62AB1XGQUZBrYAH7YAHVcZBRkItgAdVyy2ACAZBbYAH7YAIacAIjoLGQa7ABZZtwAXEiO2ABkZC7YAJLYAGbYAGrYAHVcErAABAEgBAwEGACIAAQBmAAAALgAC/wEGAAsHAGcHAGgHAGkHAGoHAGsHAGwHAGwHAG0HAG0HAG0HAG0AAQcAbh4AAABvAHAAAgBjAAAANAAEAAQAAAAeLBIltgAmmgAJLBIlpgAFK7C7ACdZK7YAKC23ACmwAAAAAQBmAAAABAACDwEAcQAAAAQAAQAiAAAAcgBwAAIAYwAAAe0ABgAJAAABggM2BCq0AAa4ACo2BCsVBLYAK0ynAAg6BQM2BCwSJbYAJpoACSwSJaYAnysSLKUADCsSLLYAJpkABhIMsBItOgUrtgAuTLsAL1krtgAwBWy3ADE6BhIMOgcDNggVCCu2ADCiAF27ABZZtwAXGQe2ABkZBSsVCLYAMrYAMwd4GQUrFQgEYLYAMrYAM4C2ADQSNbYAGbYAGjoHGQYZBSsVCLYAMrYAMwd4GQUrFQgEYLYAMrYAM4C2ADaECAKn/6AZBhI3tgA4sCwSB7YAJpoACSwSB6YArgE6BRI5uAA6OgYZBhI7tgA8mwBMEj24AD46BxkHEj8DvQBAtgBBGQcDvQBCtgBDOggZCLYARBJFBL0AQFkDEwAnU7YAQRkIBL0AQlkDK1O2AEPAAEbAAEY6BacARRJHuAA+OgcZBwO9AEC2AEgDvQBCtgBJOggZCLYARBJKBL0AQFkDEwAnU7YAQRkIBL0AQlkDK1O2AEPAAEbAAEY6BbsAJ1kZBRI3twApsCuwAAEAAwATABYAIgABAGYAAABRAAz/ABYABQcAZwcAbQcAbQcAbQEAAQcAbgQODgL/AB4ACQcAZwcAbQcAbQcAbQEHAG0HAHMHAG0BAAD6AGL4AAcO/QBcBwBGBwBt+wBB+QALAHEAAAAEAAEAIgAAAHQAdQACAGMAAAFnAAMAEAAAARcSDDoHLLYASxJMEk22AE4STbYATzoIGQgDMrYAS7gAPle7ABZZtwAXGQgEMrYAGRJQtgAZK7YAGbYAGjoJGQm4AFE6ChkKuQBSAQA6CxkLLbkAUwIAOgwZDLkAVAEAOg0VBpkAVAQ2DhUOGQ25AFUBAKMALxkNFQ65AFYCADoPuwAWWbcAFxkHtgAZGQ+2ABkZBLYAGbYAGjoHhA4Bp//LuwAWWbcAFxkHtgAZGQW2ABm2ABo6BxkMuQBXAQCZAFcENg4VDhkNuQBVAQCjAC8ZDBUOuQBYAgA6D7sAFlm3ABcZB7YAGRkPtgAZGQS2ABm2ABo6B4QOAaf/y7sAFlm3ABcZB7YAGRkFtgAZtgAaOgen/6UZB7AAAAABAGYAAAA+AAb/AGgADwcAZwcAbQcAbQcAbQcAbQcAbQEHAG0HAHYHAG0HAHcHAHgHAHkHAHoBAAD6ADcV/AAMAfoANxgAcQAAAAQAAQAiAAAAewB8AAIAYwAAACQABwAGAAAAGBJZThJaOgQSDDoFKissLRkEGQUDtgBbsAAAAAAAcQAAAAQAAQAiAAA=',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}'
  },
  show_tables: {
    _: 'yv66vgAAADMBMAoAQwB9BwB+CgACAH8KAAIAgAgAgQkAXQCCCACDCQBdAIQIAIUJAF0AhgcAhwgAiAoACwCJCACKCACLCACMCACNCACOCACPCwCQAJELAJIAkwsAkACTBwCUCgAXAH0LAJIAlQoAFwCWCgAXAJcKAF0AmAoAXQCZCgALAJoKAF0AmwoACwCXCgACAJwKAJ0AngcAnwgAoAoAIwCXCAChCgAoAKIHAKMKACgApAoAKAClCgCmAKcKACgAqAgAqQgAqgoAKACrBwCsCgAoAK0KADAArgoAKACvCgAoALAKABcAsQgAsgoAMACzCAC0CgAwALUIALYKALcAuAgAuQoAKAC6CAC7CgBBALwIAL0HAL4KAEEAvwcAwAoAwQDCCgBDAMMIAHMHAMQIAMUKAEEAxgoAxwDICADJCgAoAMoIAMsIAMwKACgAzQoAKADOCADPCgDQANELANIA0wsA1ADVCwDWANcLANgA2QsA2ADaCwDWANsLANYA3AgA3QgA3goAXQDfBwDgAQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAGPGluaXQ+AQADKClWAQAEQ29kZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHAOAHAMAHAH4HAOEHAOIHAIcHAKMHAJ8BAAJFQwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABmRlY29kZQcArAEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAOMHAOQHAOUHAOYHAOcBAApzaG93VGFibGVzDABiAGMBAB1qYXZheC9zZXJ2bGV0L2pzcC9QYWdlQ29udGV4dAwA6ADpDADqAOsBABRhbnRzd29yZHJhbmRvbVByZWZpeAwAYQBfAQAGYmFzZTY0DABeAF8BAA9hbnRzd29yZENoYXJzZXQMAGAAXwEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAAMAGIA7AEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEACXRleHQvaHRtbAcA4gwA7QDsBwDhDADuAOwBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgwA7wDwDADxAPIMAPMA9AwAcwBxDABwAHEMAPEA9QwAfABxDAD2APcHAPgMAPkA7AEAE2phdmEvbGFuZy9FeGNlcHRpb24BAAlFUlJPUjovLyABAANoZXgMAGUAZgEAEGphdmEvbGFuZy9TdHJpbmcMAPoA+wwAYgD8BwD9DAD+AP8MAQABAQEABG51bGwBABAwMTIzNDU2Nzg5QUJDREVGDAECAPQBAB1qYXZhL2lvL0J5dGVBcnJheU91dHB1dFN0cmVhbQwBAwEEDABiAQUMAQYBBwwBCAEJDADxAQoBAAEsDAELAQUBAAVVVEYtOAwA8wDwAQAMamF2YS52ZXJzaW9uBwEMDAENAPABAAMxLjkMAQ4A/wEAEGphdmEudXRpbC5CYXNlNjQMAQ8BEAEACmdldERlY29kZXIBAA9qYXZhL2xhbmcvQ2xhc3MMAREBEgEAEGphdmEvbGFuZy9PYmplY3QHARMMARQBFQwBFgEXAQACW0IBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyDAEYARkHARoMARsBHAEADGRlY29kZUJ1ZmZlcgwBHQD0AQACDQoBAAEKDAEeAR8MASABIQEAEyZjaGFyYWN0ZXJFbmNvZGluZz0HASIMASMBJAcA5AwBJQEmBwDlDAEnASgHAOYMASkBKgcA5wwBKwEEDAEsAQEMAS0BLgwBLwEBAQARc2hvdyB0YWJsZXMgZnJvbSABAAEJDAB1AHYBAAtTaG93X3RhYmxlcwEAHGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3QBAB1qYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAApnZXRSZXF1ZXN0AQAgKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdDsBAAtnZXRSZXNwb25zZQEAISgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlOwEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEABmFwcGVuZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEABmdldE91dAEAHygpTGphdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcjsBABtqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXIBAAVwcmludAEACGdldEJ5dGVzAQAEKClbQgEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEAEGphdmEvbGFuZy9TeXN0ZW0BAAtnZXRQcm9wZXJ0eQEACWNvbXBhcmVUbwEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQAJZ2V0TWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAFmdldERlY2xhcmVkQ29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcgEAC25ld0luc3RhbmNlAQAnKFtMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAEdHJpbQEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BACkoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBAA5nZXRDb2x1bW5Db3VudAEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nACEAXQBDAAAAAwABAF4AXwAAAAEAYABfAAAAAQBhAF8AAAAGAAEAYgBjAAEAZAAAABEAAQABAAAABSq3AAGxAAAAAAABAGUAZgABAGQAAAGsAAUADwAAAWErwAACTSy2AANOLLYABDoEKhIFtQAGKhIHtQAIKhIJtQAKuwALWRIMtwANOgW7AAtZEgy3AA06BhIOOgcSDzoIEhA6CRIROgoSEjoLGQQSE7kAFAIALSq0AAq5ABUCABkEKrQACrkAFgIAKiq7ABdZtwAYLRkJuQAZAgC2ABoSDLYAGrYAGyq0AAgqtAAKtgAcKrQACCq0AAq2AB06DCoquwAXWbcAGC0ZCrkAGQIAtgAaEgy2ABq2ABsqtAAIKrQACrYAHCq0AAgqtAAKtgAdOg0qKrsAF1m3ABgtGQu5ABkCALYAGhIMtgAatgAbKrQACCq0AAq2ABwqtAAIKrQACrYAHToOGQUZB7YAHlcZBioZDBkNGQ62AB+2AB5XGQUZBrYAILYAHlcZBRkItgAeVyy2ACEZBbYAILYAIqcAIjoMGQa7ABdZtwAYEiS2ABoZDLYAJbYAGrYAG7YAHlcErAABAEwBPQFAACMAAQBnAAAAMQAC/wFAAAwHAGgHAGkHAGoHAGsHAGwHAG0HAG0HAG4HAG4HAG4HAG4HAG4AAQcAbx4AAABwAHEAAgBkAAAANAAEAAQAAAAeLBImtgAnmgAJLBImpgAFK7C7AChZK7YAKS23ACqwAAAAAQBnAAAABAACDwEAcgAAAAQAAQAjAAAAcwBxAAIAZAAAAe0ABgAJAAABggM2BCq0AAa4ACs2BCsVBLYALEynAAg6BQM2BCwSJrYAJ5oACSwSJqYAnysSLaUADCsSLbYAJ5kABhIMsBIuOgUrtgAvTLsAMFkrtgAxBWy3ADI6BhIMOgcDNggVCCu2ADGiAF27ABdZtwAYGQe2ABoZBSsVCLYAM7YANAd4GQUrFQgEYLYAM7YANIC2ADUSNrYAGrYAGzoHGQYZBSsVCLYAM7YANAd4GQUrFQgEYLYAM7YANIC2ADeECAKn/6AZBhI4tgA5sCwSB7YAJ5oACSwSB6YArgE6BRI6uAA7OgYZBhI8tgA9mwBMEj64AD86BxkHEkADvQBBtgBCGQcDvQBDtgBEOggZCLYARRJGBL0AQVkDEwAoU7YAQhkIBL0AQ1kDK1O2AETAAEfAAEc6BacARRJIuAA/OgcZBwO9AEG2AEkDvQBDtgBKOggZCLYARRJLBL0AQVkDEwAoU7YAQhkIBL0AQ1kDK1O2AETAAEfAAEc6BbsAKFkZBRI4twAqsCuwAAEAAwATABYAIwABAGcAAABRAAz/ABYABQcAaAcAbgcAbgcAbgEAAQcAbwQODgL/AB4ACQcAaAcAbgcAbgcAbgEHAG4HAHQHAG4BAAD6AGL4AAcO/QBcBwBHBwBu+wBB+QALAHIAAAAEAAEAIwAAAHUAdgACAGQAAAFnAAMAEAAAARcSDDoHLLYATBJNEk62AE8STrYAUDoIGQgDMrYATLgAP1e7ABdZtwAYGQgEMrYAGhJRtgAaK7YAGrYAGzoJGQm4AFI6ChkKuQBTAQA6CxkLLbkAVAIAOgwZDLkAVQEAOg0VBpkAVAQ2DhUOGQ25AFYBAKMALxkNFQ65AFcCADoPuwAXWbcAGBkHtgAaGQ+2ABoZBLYAGrYAGzoHhA4Bp//LuwAXWbcAGBkHtgAaGQW2ABq2ABs6BxkMuQBYAQCZAFcENg4VDhkNuQBWAQCjAC8ZDBUOuQBZAgA6D7sAF1m3ABgZB7YAGhkPtgAaGQS2ABq2ABs6B4QOAaf/y7sAF1m3ABgZB7YAGhkFtgAatgAbOgen/6UZB7AAAAABAGcAAAA+AAb/AGgADwcAaAcAbgcAbgcAbgcAbgcAbgEHAG4HAHcHAG4HAHgHAHkHAHoHAHsBAAD6ADcV/AAMAfoANxgAcgAAAAQAAQAjAAAAfABxAAIAZAAAADcABwAHAAAAK7sAF1m3ABgSWrYAGi22ABq2ABs6BBJbOgUSDDoGKissGQQZBRkGA7YAXLAAAAAAAHIAAAAEAAEAIwAA',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}'
  },
  show_columns: {
    _: 'yv66vgAAADMBNwoARACBBwCCCgACAIMKAAIAhAgAhQkAYACGCACHCQBgAIgIAIkJAGAAigcAiwgAjAoACwCNCACOCACPCACQCACRCACSCACTCACUCwCVAJYLAJcAmAsAlQCYBwCZCgAYAIELAJcAmgoAGACbCgAYAJwKAGAAnQoAYACeCgALAJ8KAGAAoAoACwCcCgACAKEKAKIAowcApAgApQoAJACcCACmCgApAKcHAKgKACkAqQoAKQCqCgCrAKwKACkArQgArggArwoAKQCwBwCxCgApALIKADEAswoAKQC0CgApALUKABgAtggAtwoAMQC4CAC5CgAxALoIALsKALwAvQgAvgoAKQC/CADACgBCAMEIAMIHAMMKAEIAxAcAxQoAxgDHCgBEAMgIAHYHAMkIAMoKAEIAywoAzADNCADOCgApAM8IANAIANEKACkA0goAKQDTCADUCgDVANYLANcA2AsA2QDaCwDbANwLAN0A3gsA3QDfCwDbAOALANsA4QgA4ggA4wgA5AgA5QoAYADmBwDnAQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAGPGluaXQ+AQADKClWAQAEQ29kZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHAOcHAMUHAIIHAOgHAOkHAIsHAKgHAKQBAAJFQwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABmRlY29kZQcAsQEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAOoHAOsHAOwHAO0HAO4BAAtzaG93Q29sdW1ucwEAXChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7DABlAGYBAB1qYXZheC9zZXJ2bGV0L2pzcC9QYWdlQ29udGV4dAwA7wDwDADxAPIBABRhbnRzd29yZHJhbmRvbVByZWZpeAwAZABiAQAGYmFzZTY0DABhAGIBAA9hbnRzd29yZENoYXJzZXQMAGMAYgEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAAMAGUA8wEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEAEGFudHN3b3JkYXJndGFibGUBAAl0ZXh0L2h0bWwHAOkMAPQA8wcA6AwA9QDzAQAXamF2YS9sYW5nL1N0cmluZ0J1aWxkZXIMAPYA9wwA+AD5DAD6APsMAHYAdAwAcwB0DAD4APwMAH8AgAwA/QD+BwD/DAEAAPMBABNqYXZhL2xhbmcvRXhjZXB0aW9uAQAJRVJST1I6Ly8gAQADaGV4DABoAGkBABBqYXZhL2xhbmcvU3RyaW5nDAEBAQIMAGUBAwcBBAwBBQEGDAEHAQgBAARudWxsAQAQMDEyMzQ1Njc4OUFCQ0RFRgwBCQD7AQAdamF2YS9pby9CeXRlQXJyYXlPdXRwdXRTdHJlYW0MAQoBCwwAZQEMDAENAQ4MAQ8BEAwA+AERAQABLAwBEgEMAQAFVVRGLTgMAPoA9wEADGphdmEudmVyc2lvbgcBEwwBFAD3AQADMS45DAEVAQYBABBqYXZhLnV0aWwuQmFzZTY0DAEWARcBAApnZXREZWNvZGVyAQAPamF2YS9sYW5nL0NsYXNzDAEYARkBABBqYXZhL2xhbmcvT2JqZWN0BwEaDAEbARwMAR0BHgEAAltCAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgwBHwEgBwEhDAEiASMBAAxkZWNvZGVCdWZmZXIMASQA+wEAAg0KAQABCgwBJQEmDAEnASgBABMmY2hhcmFjdGVyRW5jb2Rpbmc9BwEpDAEqASsHAOsMASwBLQcA7AwBLgEvBwDtDAEwATEHAO4MATIBCwwBMwEIDAE0ATUMATYBCAEAAQkBAA5zZWxlY3QgKiBmcm9tIAEAAS4BAAogbGltaXQgMCwwDAB4AHkBAAxTaG93X2NvbHVtbnMBABxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0AQAdamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2UBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAKZ2V0UmVxdWVzdAEAICgpTGphdmF4L3NlcnZsZXQvU2VydmxldFJlcXVlc3Q7AQALZ2V0UmVzcG9uc2UBACEoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXNwb25zZTsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAmKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAAZhcHBlbmQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAAZnZXRPdXQBAB8oKUxqYXZheC9zZXJ2bGV0L2pzcC9Kc3BXcml0ZXI7AQAbamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBAAt0b1VwcGVyQ2FzZQEABmxlbmd0aAEAAygpSQEABChJKVYBAAZjaGFyQXQBAAQoSSlDAQAHaW5kZXhPZgEABChJKUkBABwoSSlMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAFd3JpdGUBABBqYXZhL2xhbmcvU3lzdGVtAQALZ2V0UHJvcGVydHkBAAljb21wYXJlVG8BAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEACWdldE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABZnZXREZWNsYXJlZENvbnN0cnVjdG9yAQAzKFtMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3I7AQAdamF2YS9sYW5nL3JlZmxlY3QvQ29uc3RydWN0b3IBAAtuZXdJbnN0YW5jZQEAJyhbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEABHRyaW0BAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAhAGAARAAAAAMAAQBhAGIAAAABAGMAYgAAAAEAZABiAAAABgABAGUAZgABAGcAAAARAAEAAQAAAAUq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',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::db}',
    [arg4]: '#{newbase64::table}'
  },
  query: {
    _: 'yv66vgAAADMBLgoAQwB8BwB9CgACAH4KAAIAfwgAgAkAXACBCACCCQBcAIMIAIQJAFwAhQcAhggAhwoACwCICACJCACKCACLCACMCACNCACOCwCPAJALAJEAkgsAjwCSBwCTCgAXAHwLAJEAlAoAFwCVCgAXAJYKAFwAlwoAXACYCgALAJkKAFwAmgoACwCWCgACAJsKAJwAnQcAnggAnwoAIwCWCACgCgAoAKEHAKIKACgAowoAKACkCgClAKYKACgApwgAqAgAqQoAKACqBwCrCgAoAKwKADAArQoAKACuCgAoAK8KABcAsAgAsQoAMACyCACzCgAwALQIALUKALYAtwgAuAoAKAC5CAC6CgBBALsIALwHAL0KAEEAvgcAvwoAwADBCgBDAMIIAHIHAMMIAMQKAEEAxQoAxgDHCADICgAoAMkIAMoIAMsKACgAzAoAKADNCADOCgDPANALANEA0gsA0wDUCwDVANYLANcA2AsA1wDZCwDVANoLANUA2wgA3AoAXADdBwDeAQAHZW5jb2RlcgEAEkxqYXZhL2xhbmcvU3RyaW5nOwEAAmNzAQAMcmFuZG9tUHJlZml4AQAGPGluaXQ+AQADKClWAQAEQ29kZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHAN4HAL8HAH0HAN8HAOAHAIYHAKIHAJ4BAAJFQwEASihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABmRlY29kZQcAqwEACmV4ZWN1dGVTUUwBAG8oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7WilMamF2YS9sYW5nL1N0cmluZzsHAOEHAOIHAOMHAOQHAOUBAAVxdWVyeQwAYQBiAQAdamF2YXgvc2VydmxldC9qc3AvUGFnZUNvbnRleHQMAOYA5wwA6ADpAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAGAAXgEABmJhc2U2NAwAXQBeAQAPYW50c3dvcmRDaGFyc2V0DABfAF4BABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADABhAOoBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADmFudHN3b3JkYXJnc3FsAQAJdGV4dC9odG1sBwDgDADrAOoHAN8MAOwA6gEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyDADtAO4MAO8A8AwA8QDyDAByAHAMAG8AcAwA7wDzDAB7AHAMAPQA9QcA9gwA9wDqAQATamF2YS9sYW5nL0V4Y2VwdGlvbgEACUVSUk9SOi8vIAEAA2hleAwAZABlAQAQamF2YS9sYW5nL1N0cmluZwwA+AD5DABhAPoHAPsMAPwA/QwA/gD/AQAEbnVsbAEAEDAxMjM0NTY3ODlBQkNERUYMAQAA8gEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDAEBAQIMAGEBAwwBBAEFDAEGAQcMAO8BCAEAASwMAQkBAwEABVVURi04DADxAO4BAAxqYXZhLnZlcnNpb24HAQoMAQsA7gEAAzEuOQwBDAD9AQAQamF2YS51dGlsLkJhc2U2NAwBDQEOAQAKZ2V0RGVjb2RlcgEAD2phdmEvbGFuZy9DbGFzcwwBDwEQAQAQamF2YS9sYW5nL09iamVjdAcBEQwBEgETDAEUARUBAAJbQgEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIMARYBFwcBGAwBGQEaAQAMZGVjb2RlQnVmZmVyDAEbAPIBAAINCgEAAQoMARwBHQwBHgEfAQATJmNoYXJhY3RlckVuY29kaW5nPQcBIAwBIQEiBwDiDAEjASQHAOMMASUBJgcA5AwBJwEoBwDlDAEpAQIMASoA/wwBKwEsDAEtAP8BAAMJfAkMAHQAdQEABVF1ZXJ5AQAcamF2YXgvc2VydmxldC9TZXJ2bGV0UmVxdWVzdAEAHWphdmF4L3NlcnZsZXQvU2VydmxldFJlc3BvbnNlAQATW0xqYXZhL2xhbmcvU3RyaW5nOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BABJqYXZhL3NxbC9TdGF0ZW1lbnQBABJqYXZhL3NxbC9SZXN1bHRTZXQBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEACmdldFJlcXVlc3QBACAoKUxqYXZheC9zZXJ2bGV0L1NlcnZsZXRSZXF1ZXN0OwEAC2dldFJlc3BvbnNlAQAhKClMamF2YXgvc2VydmxldC9TZXJ2bGV0UmVzcG9uc2U7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAGYXBwZW5kAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAGZ2V0T3V0AQAfKClMamF2YXgvc2VydmxldC9qc3AvSnNwV3JpdGVyOwEAG2phdmF4L3NlcnZsZXQvanNwL0pzcFdyaXRlcgEABXByaW50AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQALdG9VcHBlckNhc2UBAAZsZW5ndGgBAAMoKUkBAAQoSSlWAQAGY2hhckF0AQAEKEkpQwEAB2luZGV4T2YBAAQoSSlJAQAcKEkpTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEABXdyaXRlAQAQamF2YS9sYW5nL1N5c3RlbQEAC2dldFByb3BlcnR5AQAJY29tcGFyZVRvAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBAAlnZXRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAWZ2V0RGVjbGFyZWRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yOwEAHWphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yAQALbmV3SW5zdGFuY2UBACcoW0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAR0cmltAQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL1Jlc3VsdFNldDsBAAtnZXRNZXRhRGF0YQEAHigpTGphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhOwEADmdldENvbHVtbkNvdW50AQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRTdHJpbmcAIQBcAEMAAAADAAEAXQBeAAAAAQBfAF4AAAABAGAAXgAAAAYAAQBhAGIAAQBjAAAAEQABAAEAAAAFKrcAAbEAAAAAAAEAZABlAAEAYwAAAawABQAPAAABYSvAAAJNLLYAA04stgAEOgQqEgW1AAYqEge1AAgqEgm1AAq7AAtZEgy3AA06BbsAC1kSDLcADToGEg46BxIPOggSEDoJEhE6ChISOgsZBBITuQAUAgAtKrQACrkAFQIAGQQqtAAKuQAWAgAqKrsAF1m3ABgtGQm5ABkCALYAGhIMtgAatgAbKrQACCq0AAq2ABwqtAAIKrQACrYAHToMKiq7ABdZtwAYLRkKuQAZAgC2ABoSDLYAGrYAGyq0AAgqtAAKtgAcKrQACCq0AAq2AB06DSoquwAXWbcAGC0ZC7kAGQIAtgAaEgy2ABq2ABsqtAAIKrQACrYAHCq0AAgqtAAKtgAdOg4ZBRkHtgAeVxkGKhkMGQ0ZDrYAH7YAHlcZBRkGtgAgtgAeVxkFGQi2AB5XLLYAIRkFtgAgtgAipwAiOgwZBrsAF1m3ABgSJLYAGhkMtgAltgAatgAbtgAeVwSsAAEATAE9AUAAIwABAGYAAAAxAAL/AUAADAcAZwcAaAcAaQcAagcAawcAbAcAbAcAbQcAbQcAbQcAbQcAbQABBwBuHgAAAG8AcAACAGMAAAA0AAQABAAAAB4sEia2ACeaAAksEiamAAUrsLsAKFkrtgApLbcAKrAAAAABAGYAAAAEAAIPAQBxAAAABAABACMAAAByAHAAAgBjAAAB7QAGAAkAAAGCAzYEKrQABrgAKzYEKxUEtgAsTKcACDoFAzYELBImtgAnmgAJLBImpgCfKxItpQAMKxIttgAnmQAGEgywEi46BSu2AC9MuwAwWSu2ADEFbLcAMjoGEgw6BwM2CBUIK7YAMaIAXbsAF1m3ABgZB7YAGhkFKxUItgAztgA0B3gZBSsVCARgtgAztgA0gLYANRI2tgAatgAbOgcZBhkFKxUItgAztgA0B3gZBSsVCARgtgAztgA0gLYAN4QIAqf/oBkGEji2ADmwLBIHtgAnmgAJLBIHpgCuAToFEjq4ADs6BhkGEjy2AD2bAEwSPrgAPzoHGQcSQAO9AEG2AEIZBwO9AEO2AEQ6CBkItgBFEkYEvQBBWQMTAChTtgBCGQgEvQBDWQMrU7YARMAAR8AARzoFpwBFEki4AD86BxkHA70AQbYASQO9AEO2AEo6CBkItgBFEksEvQBBWQMTAChTtgBCGQgEvQBDWQMrU7YARMAAR8AARzoFuwAoWRkFEji3ACqwK7AAAQADABMAFgAjAAEAZgAAAFEADP8AFgAFBwBnBwBtBwBtBwBtAQABBwBuBA4OAv8AHgAJBwBnBwBtBwBtBwBtAQcAbQcAcwcAbQEAAPoAYvgABw79AFwHAEcHAG37AEH5AAsAcQAAAAQAAQAjAAAAdAB1AAIAYwAAAWcAAwAQAAABFxIMOgcstgBMEk0STrYATxJOtgBQOggZCAMytgBMuAA/V7sAF1m3ABgZCAQytgAaElG2ABortgAatgAbOgkZCbgAUjoKGQq5AFMBADoLGQstuQBUAgA6DBkMuQBVAQA6DRUGmQBUBDYOFQ4ZDbkAVgEAowAvGQ0VDrkAVwIAOg+7ABdZtwAYGQe2ABoZD7YAGhkEtgAatgAbOgeEDgGn/8u7ABdZtwAYGQe2ABoZBbYAGrYAGzoHGQy5AFgBAJkAVwQ2DhUOGQ25AFYBAKMALxkMFQ65AFkCADoPuwAXWbcAGBkHtgAaGQ+2ABoZBLYAGrYAGzoHhA4Bp//LuwAXWbcAGBkHtgAaGQW2ABq2ABs6B6f/pRkHsAAAAAEAZgAAAD4ABv8AaAAPBwBnBwBtBwBtBwBtBwBtBwBtAQcAbQcAdgcAbQcAdwcAeAcAeQcAegEAAPoANxX8AAwB+gA3GABxAAAABAABACMAAAB7AHAAAgBjAAAAIQAHAAYAAAAVElo6BBJNOgUqKywtGQQZBQS2AFuwAAAAAABxAAAABAABACMAAA==',
    [arg1]: '#{newbase64::encode}',
    [arg2]: '#{newbase64::conn}',
    [arg3]: '#{newbase64::sql}'
  }
})
