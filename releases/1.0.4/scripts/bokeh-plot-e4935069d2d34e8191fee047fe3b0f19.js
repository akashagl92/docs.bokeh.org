(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("73ef5505-5f93-48fd-b1c6-a393bf3794db");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73ef5505-5f93-48fd-b1c6-a393bf3794db' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"a58e87df-1862-4cd3-b4fc-ad40243fbe13":{"roots":{"references":[{"attributes":{"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19325","type":"BasicTicker"},"visible":false},"id":"19328","type":"Grid"},{"attributes":{"formatter":{"id":"19355","type":"BasicTickFormatter"},"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19330","type":"BasicTicker"}},"id":"19329","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"white"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19348","type":"Circle"},{"attributes":{},"id":"19330","type":"BasicTicker"},{"attributes":{},"id":"19362","type":"Selection"},{"attributes":{"source":{"id":"19340","type":"ColumnDataSource"}},"id":"19346","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"19334","type":"WheelZoomTool"},{"id":"19335","type":"ResetTool"},{"id":"19352","type":"HoverTool"}]},"id":"19336","type":"Toolbar"},{"attributes":{},"id":"19357","type":"BasicTickFormatter"},{"attributes":{},"id":"19334","type":"WheelZoomTool"},{"attributes":{},"id":"19360","type":"Selection"},{"attributes":{"source":{"id":"19347","type":"ColumnDataSource"}},"id":"19351","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19343","type":"HexTile"},{"attributes":{},"id":"19335","type":"ResetTool"},{"attributes":{},"id":"19361","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"19347","type":"ColumnDataSource"},"glyph":{"id":"19348","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"19349","type":"Circle"},"selection_glyph":null,"view":{"id":"19351","type":"CDSView"}},"id":"19350","type":"GlyphRenderer"},{"attributes":{"fill_color":{"field":"c","transform":{"id":"19339","type":"LinearColorMapper"}},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19342","type":"HexTile"},{"attributes":{},"id":"19359","type":"UnionRenderers"},{"attributes":{"plot":null,"text":"Hexbin for 500 points"},"id":"19313","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"khJ3s9UT/z+eB9khSsXxPyx5EFwl+u0/hmlCbM0P/D8EFXBerqITQHZfVZVlYAxAOEdON3rfA0C/eWlomlkUQKoCu0pm/QJAGMpWl7XUAEAOC0iiUe4QQMLVB6B7pBJAyssb8weED0CI9ngRH0viP2wunWlkVgtAULM/SRWlCEB0VC6zedjzP27xXXS4Fg9AqOSr8Z0gyj8sYB8kopD0PxDIJHSmc/y/jE92PpKTDEBI9nNpsB7wv/IFQvNyOvq/rImBpuWjAcBi7iQ4PLv3vwQoON/3RwxA+Lm3zHTKE0DYVONSNLjVv0wXn4wctAxAiiCfL8qfDUCwDUbYN5zVv/IF6BO7Fg9AUFEuqz9ayj9D4L5RZXQAQEjBTIaR+8I/XLr28g0u1T8/5tvZuT4EQLCyeS+GUQpAnruNnirSAkAnd5wzaiALQD6z0FFy8BRA4CS0GK7NFUDIQo2hVPD7PzGU/IK/5wVABVaCcSB0EUCmFEXiITb3P+jMI3qjLQtAx/csFxMcGUAyLIz2dSoFQMtgNX031RJAGE+dWR1E27/nQMK2iaoNQPyC2Qg7CPO/PVaoup/w/T8oJ/cfo0DmP/ld7e2+4wFAZYphkKNQ8z/ah4U3DtftP1zUeH8aHA1AYIySgYjt+T8Suqa4s98HQIhU8jSkH9o/BZCS6r3b8j8sXjQl2CPuvy4SsPx44f+/BKTZsX/V2D/rVcLNSTEQQBLVe6KIbfW/Gxo1SQiA/D/p+UtJPN/8PzLHFO2acvO/f/dyttfSCkCADwozqmn4v7Au/iB+uwZAAC+DDbGetj+SVq7CD70EQMxAyvBIeRNAGh4tiP335D98a6WEBNndP2JQamTqRQVAy81fZqYhGUAcDRLja/LYP+LnUTtWtg5AmmIyUBAEAUDoAfEmMVLsP0QjjcI4Ug1Aks5J+rFa/T/i23q2xn7/PxzM4sAPKui/IW10zNioAUC45HX9mJ7yP19S1VGS3wFAfnBcOdHj+D+w3ecmhnj9P9C5dWmA2dG/6/RCoyzwCUDeLiYOkbX+v/P9eapLTQdAQOqkWDgHlj9gvRHgHNCyP6QqU9PV1/Y/lBoJf4Tv1D/WjzkjXHXwP8jzNd4lOd6/kO4AJ4Sx9D+AJMYQnNz4P8h4rbXqwt6/ZkCeM0ClE0BRUWLxohkMQOTnRipiZBFAdCGxJ8pQAUDghD97FafdP3QUJ3ZLSg1AxGoNWaUtBkB4QQss3csNQHuQU4ZVvARA7ZwFhs5W8j8z0vIDh30CQIhVbhyKHhNAGIU1B2WU5r+M1mD8oG3ovwyqPemhO/W/umHDH/+n+z8s1a3/OTjxP3HNfQeHigFA8EOLeNLcEEAOOcNqgHkPQCuvMvdPBARAlujseI8p7T+ASNpSAmrWv5IUfvKCJANAqI3bgTi/DUChgmpdinD+P9Jh35FUj/8/kC2c2s6f+j9gNMP2hYX0P5JOnCXfnhRAKiHP+uBTCECiKQMxqfzyP7CtwCZCPt6/hWjShQIo9z+RgDoN+p8EQND7z22xfrk/TLFYzA0N4b/WuqhWza8AQO4Ka+FJAgVAo4BOOi7gCUBcSRDVdMXvPzqxi8xNBhFAQGlCxSz4oL+stDPur7gEQBjtRpQLMt6/1JHSv/PVA8BPC7tX81IPQAjFLA0powlAcKEbRSVvw7+qdl8kT9QRQMRu5172JOg/Fy7klA0+/z9oC3LW8c8NQECSTuBO/ZU/qArmgAPg3z9OJGy7t54JQA0jErgQ1RFAIWRyb+GqEkBaeounXngLQF7TPXBm9fo/5qC1/YAg9z/yg4BHJpf3v2v683NVtARAHACYbYZ75z9LoKCMZwAEQAAteefVca+/g+gNogjeBkAW+9dyrMDxPxKaWNzzvuU/EBVQfWlmEkDmdI20v50IQL6PpIl+DQJAhtpanlFGEUBUgflaSenov5bdt14nj+I/1tBpcmMtAUCKSZxP0SD7v+oOx1VXCgFAEFX6KSI3yL8K07dZPq0QQBxPpC2acQ9AgD4ApSiY87/XPVqRTqr6P6hc5Nw68whADr3v7sjb4T9EDKaeqssNwN7wvNv+IQxAgNhq60det7/Ajo/mlT68v+CCN5ZlAs+/Qs4kWeNgDUChr3N+z9UOQLdLyqfIQAtA5YuifFCxG0BbWnj9ZbENQFhNk5dgVh1AckUbW+/j5T8gRsaEwb29P7w3qbVghvy/6uOK4XX05T+xNzGRPToAQFcp6MvHqvo/YAmn/xStxL/m2kV42K0JQLQppalNLBNAhtxG0o738D+oupXouSvzvy/uddDcRwhAIqLYUT2mG0AEM9npsJj5PyatrgFQI/I/jEjmxnHh57/isv9XUPINQMHiSYN+D/g/qr6DSg3TDUDwOvQj7FL4P4c8On4hnfQ/IskHzmyWBUAzERXCRogDQIsXfQFqnwxAoIlAVFT9tT+7QH5n0asQQIj8LJf7GO0/JWEAAD5+CkDHnJ47qfn6P3EQwaX7yBNAnHWNW1L/+j8CLFdIaI4GQO4cS8KO3QVA9nqJAUX78b/kzF0raHvnv/Rmtr76Mw1ApCMYrpt3EEAE+uU9QSLxP+qAw67/UBBAkbIpS18TAUAYnpJaHHbiv4y4HRy6CQNAYCbxQqTsvL9yGzNPDqAFQCHyceZhZgFAJtAmGwgQDkBCxJ+AB+PrP4Bf5WvdUQtAVoS6IFKyEUC6mnbrIf4BQI5bAj7i5wJAyvAVNqZxEkD04mdovvMRQKy63PdohQVAti6aaGET4z+6W83gTlL2P77wHEtw1v+/sCOAFmN88D8ksdCQBnf+v0YRLOJCau4/hkRhXPG2+r+zp+uVtIIBQOJqD0cs6fA/hHC7q/uMEEBCqe52mhkNQKxUe9dKFdA/q4J0bxTI8j9yWnyuSJT/vxTBjjX1yhFAsIzVvwRU17/nZt8j2JgFQDDCF1vLorg/sV9BcrHC/z+Alty4JlAMQGQGylBF5fc/kMQsNSNhw790Kxi6L5wRQMCttBRy2RFATx8ShSRc+z/eid4gro3/v+JIOdKbbwZAFQfzWx6iEEBiEyC5co8GQOTHg0V0kwpAGp4N/XNuF0DMehiwk3rqvwh/pELCpue/bHjwmsSDA0BmKo8f5/fmPxC0eic94t8/iFOHzyDt17+XarZEJWoQQFxgfKoc/tA/lr2XebrGF0B4tZ7gsvjpP0DGw14fsay/UsNhwnRnFUA9IvIK1FAHQDfruBzCkQpA1Pf8ls3q2z9Ms+qOhJTyv7IHPSqI+hNA5HeJ7RSfBED8m5bjVkn0PzQMJBMa+dw/IkETJQLoGkDgrivzMEm2v3qoJFMsjBpAOA/gxvMm0b+4bmt/+VPivw5WZ+8DKgVAIK8dokt07L/JrbtUh/0WQM5rvKym2Pg/sixnKXypEUBDyDjVOR74P+BxsGV+E7+/wEuYMSbN/z++X4yLSrfpP/AAtT4PYAVAAFE8mob/xj9B87uxgokCQPBYleDQ0Lg/bGebsnRP+T+mw2GqV+f6P9Coa2rQbME/1OdZwM71AEAs+qMjq2sRQAT9afgMWglAKj0EITnEGUCkfjPOvvLtv3PVL0w9GBFARF+MOO/h0T/gzig2GBjAvyyec3fyYAXAiuSMH2bVB0C4YIgzJbUVQAJGGCmJFve/5tKDQYlWDUBarCMIJhABQDl2OOYTlQxAgK8ODBfMxr8YWqiRINnuP5gcvvj/Adq/TTMK9aRDAEAABd52nRDXv9E9crSWQRVAFjFUN69E8T9/l/gFUnkKQEhf9h5gvt4/jzJ11FIs8D98DSXhvR8TQLkQPIE6CAZA/7eYWS3EBkBE6rQ0YX0cQLRvOglI4QZAIJeDTpYG+z+VPM6jdKMOQGj5n7GFXcI/IMIN+QUltz+AJRsACeC3P85UUj34efc/dsTZ790sFUAw/FgRPejgv2sKK7ouDP0/znpPpqq2/j8wY8Spm7rxPxCnDcHzpMe/2JQ78Zfn3r/u3IA6zyX6P/xGOwnxlgxA2A/EKa107j9Io7wtCFb8vygJPSRB6fm/BfVlVNC2/j/4Q0CVIdEQQEq9ZpSN0RpARyt9VSAo9j/8winQxRMJQA6Yv9pqwv2/7+gtwQ85+D+rH1LpdfEEQPn5QTKZh/c/qlrvglDB9r9Y2AHubwoMQDD5+OcPoQRA9KVROSGo0D98kGw8lFsIQJ72IIV4Mw1A+dEVxe8CBUA4qukqE4oRQOfTG8syNABAenEYs0564z/EqXwDk2j6P+uFuuawrxZAwGRRlIgqCEDdOIGUpzXxP4DcKu7RpAZAgKNiZJA4pT8UVtizObDjP2yCRizGp/w/zftFK6P+AEBqkw1vGU4TQNrDrRIJMQ9AFNUIRHwABUDRPF5jgsMRQHmnhkxBTg1AggBvvTOYEEDAPIpWfsDnvy17XehWofc/lCL90sy1DkDzy4nE+jIZQG1PO+RWhPk/vmZNFjg18z8GZhocsu8MQKSxws883RFARE2SIVE96b+fpAFnqsQAQIiJqQRFVxJAlDBJm7HdFUDXsOorq0UAQKAkIzEUpvQ//1CszfIdDkDurxGPxkwCwMcDO9KP1Q1A4OgbS8Mnz7+Wds5uJmcIwGHeJrJ0NhhAlHF0c03A8D8CafG1g70XQIISB5e0xg5Ad3EEodTv9D/bDlM1C376P+VxgDbfJxFAjnhDKLB65j96cglpP9IVQABjj1QRise/CklYWSB0FkCu4FuSUSkRQNCy59Eyccm/pCw0AQOXCkBTa0YRxYz+P/AGAfzk+94/+DLi640vD0DAqinWVL/hv9Ff1gii/QxABj+chjwU6j9YcPkghjz6P1DJ90nYqgBAzpgOnRAu+L+IoUguEXTUv0QX7B1spgNAt5mb/JgFFEC8NIq2bf0KQMAHzVWnw/q/WN4llM31/b+EUOMBvi0NQJYqZaW1VgxAsPGCWFx0xj/whb+zhoHUv8AJ8b7vDOM/mFC0wYMSEUAMoPAz88wLQLE6Gw8ilAFAgjbs7cBY9D92RD1plRcFQJohXwf3HhJAQF0+J/bjDEAKUACl+Tr6PwAvbFElMdY/yvcNENJBC0CghmdsKvDNv/9xK8Htx/w/bt8aR9rwBkCVHlCpKeH+P1r7/U9SJgpA1lLD8OjmB8AgrRnysIPhvy4I9CEtPQdAskC/z0ue9z+aAR7gOjgRQBhGOppX0BFAEJRWl3I327846xLU+PsRQIDQviJ9xc2/cAcBYjW1yD/orzkDdofQv0L/BQLg0RZAhiGreLkTBkB1Bt+aO3UDQBzmiqsLNABAwhb6g6en8j8cA6MYpukDQJcPvBFCJQVAKvyTf/3QEkC+2WPnWrviPw==","dtype":"float64","shape":[500]},"y":{"__ndarray__":"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","dtype":"float64","shape":[500]}},"selected":{"id":"19362","type":"Selection"},"selection_policy":{"id":"19361","type":"UnionRenderers"}},"id":"19347","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"19316","type":"DataRange1d"},{"attributes":{"high":17,"low":0,"palette":["#440154","#440255","#440357","#450558","#45065A","#45085B","#46095C","#460B5E","#460C5F","#460E61","#470F62","#471163","#471265","#471466","#471567","#471669","#47186A","#48196B","#481A6C","#481C6E","#481D6F","#481E70","#482071","#482172","#482273","#482374","#472575","#472676","#472777","#472878","#472A79","#472B7A","#472C7B","#462D7C","#462F7C","#46307D","#46317E","#45327F","#45347F","#453580","#453681","#443781","#443982","#433A83","#433B83","#433C84","#423D84","#423E85","#424085","#414186","#414286","#404387","#404487","#3F4587","#3F4788","#3E4888","#3E4989","#3D4A89","#3D4B89","#3D4C89","#3C4D8A","#3C4E8A","#3B508A","#3B518A","#3A528B","#3A538B","#39548B","#39558B","#38568B","#38578C","#37588C","#37598C","#365A8C","#365B8C","#355C8C","#355D8C","#345E8D","#345F8D","#33608D","#33618D","#32628D","#32638D","#31648D","#31658D","#31668D","#30678D","#30688D","#2F698D","#2F6A8D","#2E6B8E","#2E6C8E","#2E6D8E","#2D6E8E","#2D6F8E","#2C708E","#2C718E","#2C728E","#2B738E","#2B748E","#2A758E","#2A768E","#2A778E","#29788E","#29798E","#287A8E","#287A8E","#287B8E","#277C8E","#277D8E","#277E8E","#267F8E","#26808E","#26818E","#25828E","#25838D","#24848D","#24858D","#24868D","#23878D","#23888D","#23898D","#22898D","#228A8D","#228B8D","#218C8D","#218D8C","#218E8C","#208F8C","#20908C","#20918C","#1F928C","#1F938B","#1F948B","#1F958B","#1F968B","#1E978A","#1E988A","#1E998A","#1E998A","#1E9A89","#1E9B89","#1E9C89","#1E9D88","#1E9E88","#1E9F88","#1EA087","#1FA187","#1FA286","#1FA386","#20A485","#20A585","#21A685","#21A784","#22A784","#23A883","#23A982","#24AA82","#25AB81","#26AC81","#27AD80","#28AE7F","#29AF7F","#2AB07E","#2BB17D","#2CB17D","#2EB27C","#2FB37B","#30B47A","#32B57A","#33B679","#35B778","#36B877","#38B976","#39B976","#3BBA75","#3DBB74","#3EBC73","#40BD72","#42BE71","#44BE70","#45BF6F","#47C06E","#49C16D","#4BC26C","#4DC26B","#4FC369","#51C468","#53C567","#55C666","#57C665","#59C764","#5BC862","#5EC961","#60C960","#62CA5F","#64CB5D","#67CC5C","#69CC5B","#6BCD59","#6DCE58","#70CE56","#72CF55","#74D054","#77D052","#79D151","#7CD24F","#7ED24E","#81D34C","#83D34B","#86D449","#88D547","#8BD546","#8DD644","#90D643","#92D741","#95D73F","#97D83E","#9AD83C","#9DD93A","#9FD938","#A2DA37","#A5DA35","#A7DB33","#AADB32","#ADDC30","#AFDC2E","#B2DD2C","#B5DD2B","#B7DD29","#BADE27","#BDDE26","#BFDF24","#C2DF22","#C5DF21","#C7E01F","#CAE01E","#CDE01D","#CFE11C","#D2E11B","#D4E11A","#D7E219","#DAE218","#DCE218","#DFE318","#E1E318","#E4E318","#E7E419","#E9E419","#ECE41A","#EEE51B","#F1E51C","#F3E51E","#F6E61F","#F8E621","#FAE622","#FDE724"]},"id":"19339","type":"LinearColorMapper"},{"attributes":{"callback":null},"id":"19318","type":"DataRange1d"},{"attributes":{},"id":"19320","type":"LinearScale"},{"attributes":{"callback":null,"data":{"c":[1,1,1,1,1,2,2,1,1,7,3,1,4,4,4,1,1,4,2,4,4,8,4,3,3,2,2,1,2,14,5,4,3,1,2,1,3,1,6,6,11,8,8,7,10,1,1,1,2,6,9,7,17,9,8,3,1,1,2,1,3,5,11,10,11,9,8,6,4,1,2,4,4,7,7,11,8,12,2,2,1,1,2,5,7,13,10,8,4,3,1,1,2,3,5,7,4,8,8,2,3,2,2,1,1,2,4,6,4,1,3,1,1,1,1,1,1,2,1,2,1,2,1],"q":[-4,-4,-4,-3,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,11],"r":[-1,1,4,-1,-4,-1,0,1,3,-2,-1,0,1,2,3,6,-6,-5,-4,-3,-2,-1,0,1,2,3,-6,-5,-4,-3,-2,-1,0,1,2,3,-8,-6,-5,-4,-3,-2,-1,0,1,2,3,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,-8,-7,-6,-5,-4,-3,-2,-1,0,1,4,-8,-7,-6,-5,-4,-3,-2,-1,0,1,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,2,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,1,-10,-9,-8,-7,-6,-5,-4,-3,-2,0,-11,-9,-6,-5,-4,-3,-2,-7,-5,-3,-7]},"selected":{"id":"19360","type":"Selection"},"selection_policy":{"id":"19359","type":"UnionRenderers"}},"id":"19340","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#440154"},"below":[{"id":"19324","type":"LinearAxis"}],"left":[{"id":"19329","type":"LinearAxis"}],"match_aspect":true,"renderers":[{"id":"19324","type":"LinearAxis"},{"id":"19328","type":"Grid"},{"id":"19329","type":"LinearAxis"},{"id":"19333","type":"Grid"},{"id":"19345","type":"GlyphRenderer"},{"id":"19350","type":"GlyphRenderer"}],"title":{"id":"19313","type":"Title"},"toolbar":{"id":"19336","type":"Toolbar"},"x_range":{"id":"19316","type":"DataRange1d"},"x_scale":{"id":"19320","type":"LinearScale"},"y_range":{"id":"19318","type":"DataRange1d"},"y_scale":{"id":"19322","type":"LinearScale"}},"id":"19314","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"19322","type":"LinearScale"},{"attributes":{"formatter":{"id":"19357","type":"BasicTickFormatter"},"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19325","type":"BasicTicker"}},"id":"19324","type":"LinearAxis"},{"attributes":{"callback":null,"point_policy":"follow_mouse","renderers":[{"id":"19345","type":"GlyphRenderer"}],"tooltips":[["count","@c"],["(q,r)","(@q, @r)"]]},"id":"19352","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"19349","type":"Circle"},{"attributes":{"data_source":{"id":"19340","type":"ColumnDataSource"},"glyph":{"id":"19342","type":"HexTile"},"hover_glyph":{"id":"19344","type":"HexTile"},"muted_glyph":null,"nonselection_glyph":{"id":"19343","type":"HexTile"},"selection_glyph":null,"view":{"id":"19346","type":"CDSView"}},"id":"19345","type":"GlyphRenderer"},{"attributes":{},"id":"19355","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"pink"},"line_alpha":{"value":0.8},"line_color":{"value":"pink"},"q":{"field":"q"},"r":{"field":"r"},"size":0.5},"id":"19344","type":"HexTile"},{"attributes":{},"id":"19325","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"19314","subtype":"Figure","type":"Plot"},"ticker":{"id":"19330","type":"BasicTicker"},"visible":false},"id":"19333","type":"Grid"}],"root_ids":["19314"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"a58e87df-1862-4cd3-b4fc-ad40243fbe13","roots":{"19314":"73ef5505-5f93-48fd-b1c6-a393bf3794db"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();