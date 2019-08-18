(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("6301c79b-ee4b-4924-a58d-ea8a25bd04e9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6301c79b-ee4b-4924-a58d-ea8a25bd04e9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"7e9e18da-c008-487f-8079-ac491dc7469e":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["text","text_angle","x","y"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":{"__ndarray__":"AAAAAAAAAADXEx/QLZeVP9cTH9Atl7U/4U4XXGIx0D8AAAAAAAAAAEi7Kv7er90/miId87o95D8KyighbFbsPwAAAAAAAAAA0MPYgXg08T/7KZyEAZHzP8WI4PVDmvY/AAAAAAAAAADw7qP4zPb4PzaHDA7H0RNAEN39BUa/FEAAAAAAAAAAAK/VfnT/axVATs7/4rgYFkCxaRDIrIQWQAAAAAAAAAAAeKAxkpRcF0COU5MT2YoYQHzIVDnvjRlAAAAAAAAAAAB9XOaMnKYaQKYuGDx46htAlKPZYY7tHEAAAAAAAAAAAG/5ylkN2x1AcY1crbrzHkD6KZyEAZETQAAAAAAAAAAAwGC9TuloFEAQ3f0FRr8UQJq2rkZoVhVAAAAAAAAAAADEiOD1Q5oWQAF64tK28xdAyLADnZ7LGEA=","dtype":"float64","shape":[40]},"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.6323644399957808,-1.786247649071937,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.1065802755027028,-0.855556114876951,-0.2603364557048132,0.4010861697298566,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761343,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042565,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115932,0.3308767791179715,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727855]}},"id":"cc44e76d-270c-4735-9ab0-993340dd38fa","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"}},"id":"efce4241-d3ae-4810-8b21-90d6f31aa09e","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3c00d617-884f-47d7-a8fb-9b1da30b37a9","type":"BoxAnnotation"},{"attributes":{"location":"top_left","plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"}},"id":"55aead1e-8cf6-4089-924e-bf522729b26f","type":"Legend"},{"attributes":{"callback":null,"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"},"tooltips":[["Medal_Count","@values"]]},"id":"79272c1e-526f-4ab6-a2cc-e705af534958","type":"HoverTool"},{"attributes":{},"id":"8daba8ca-ec6d-41c8-b0a1-c9cb9e009728","type":"BasicTicker"},{"attributes":{"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"}},"id":"5e146294-c3f4-423c-9a6b-6c234859ce16","type":"PanTool"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"81cb70db-9fea-4ed9-b46a-1f26e46e6080","type":"AnnularWedge"},{"attributes":{},"id":"ec038a85-aff6-41c5-ac67-cd1983ddde7e","type":"BasicTicker"},{"attributes":{},"id":"3f9a97e9-da33-4074-b691-e4258c57c245","type":"BasicTickFormatter"},{"attributes":{"axis_label":null,"formatter":{"id":"3f9a97e9-da33-4074-b691-e4258c57c245","type":"BasicTickFormatter"},"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"},"ticker":{"id":"8daba8ca-ec6d-41c8-b0a1-c9cb9e009728","type":"BasicTicker"},"visible":false},"id":"f42835f6-ecc1-4548-8aae-aee44959561e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"3c00d617-884f-47d7-a8fb-9b1da30b37a9","type":"BoxAnnotation"},"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"}},"id":"e2eda0c0-3b44-4d8d-9d6a-5d78dbef79dd","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"}},"id":"0915c4f0-d0a6-4f16-a9c4-235c164a1c06","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["abbr_medal","inners","end","start","level","centers","color","values","outers"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":{"__ndarray__":"AAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkAAAAAAAADyPwAAAAAAAAJAAAAAAAAAAkAAAAAAAAACQAAAAAAAAPI/AAAAAAAAAkAAAAAAAAACQAAAAAAAAAJAAAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkAAAAAAAADyPwAAAAAAAAJAAAAAAAAAAkAAAAAAAAACQAAAAAAAAPI/AAAAAAAAAkAAAAAAAAACQAAAAAAAAAJAAAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkAAAAAAAADyPwAAAAAAAAJAAAAAAAAAAkAAAAAAAAACQAAAAAAAAPI/AAAAAAAAAkAAAAAAAAACQAAAAAAAAAJAAAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkA=","dtype":"float64","shape":[40]},"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":{"__ndarray__":"UvYiihNK2D/XEx/QLZelP+FOF1xiMcA/UvYiihNK2D+AR5jKG97wPx9AGTnViuE/FQUhraDw5j+AR5jKG97wP7P9oRtanfc/H0AZOdWK8T/XEx/QLZf1P7P9oRtanfc/gEeYyhveAEAu4KXVP1D6PySlrUkLtv8/gEeYyhveAECaIh3zuj0EQA212l7rjQJA+ymchAGRA0CaIh3zuj0EQM3YJkT5/ApAFQUhraDwBkDx7qP4zPYIQM3YJkT5/ApAWAn4bu2yEED4PupGglkNQLkQdwA0BhBAWAn4bu2yEECZIh3zuj0UQG68WfAx4RFAXDEbFkjkEkCZIh3zuj0UQP5RvytcwhVA6J5dqheUFEA3G55hdOoUQP1RvytcwhVAGC1EVPshGUCKvwHAK3IXQHg0w+VBdRhAFy1EVPshGUA=","dtype":"float64","shape":[40]},"inners":{"__ndarray__":"AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8AAAAAAAAAAAAAAAAAAPg/AAAAAAAA+D8AAAAAAAD4PwAAAAAAAAAAAAAAAAAA+D8AAAAAAAD4PwAAAAAAAPg/AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8AAAAAAAAAAAAAAAAAAPg/AAAAAAAA+D8AAAAAAAD4PwAAAAAAAAAAAAAAAAAA+D8AAAAAAAD4PwAAAAAAAPg/AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8AAAAAAAAAAAAAAAAAAPg/AAAAAAAA+D8AAAAAAAD4PwAAAAAAAAAAAAAAAAAA+D8AAAAAAAD4PwAAAAAAAPg/AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8=","dtype":"float64","shape":[40]},"level":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8=","dtype":"float64","shape":[40]},"outers":{"__ndarray__":"AAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAD4PwAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAPg/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAD4PwAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAPg/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAD4PwAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAPg/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[40]},"start":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAANcTH9Atl6U/4U4XXGIxwD9S9iKKE0rYP1L2IooTStg/H0AZOdWK4T8VBSGtoPDmP4BHmMob3vA/gEeYyhve8D8fQBk51YrxP9cTH9Atl/U/s/2hG1qd9z+z/aEbWp33Py7gpdU/UPo/JKWtSQu2/z+AR5jKG94AQIBHmMob3gBADbXaXuuNAkD7KZyEAZEDQJoiHfO6PQRAmiId87o9BEAVBSGtoPAGQPHuo/jM9ghAzdgmRPn8CkDN2CZE+fwKQPg+6kaCWQ1AuRB3ADQGEEBYCfhu7bIQQFgJ+G7tshBAbrxZ8DHhEUBcMRsWSOQSQJkiHfO6PRRAmSId87o9FEDonl2qF5QUQDcbnmF06hRA/lG/K1zCFUD9Ub8rXMIVQIq/AcArchdAeDTD5UF1GEA=","dtype":"float64","shape":[40]},"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"962b528b-5300-478d-947f-6c9418b7064d","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"99d63c0a-bc4e-4cbd-ad8b-14b557aea834","type":"Range1d"},{"attributes":{"plot":null,"text":null},"id":"a54b2120-a185-4e18-95c4-5b4b7a5f8e33","type":"Title"},{"attributes":{},"id":"66d63d63-03b6-47af-8e98-40f8d60d3078","type":"ToolEvents"},{"attributes":{"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"}},"id":"8bf5a86b-07d7-448d-a159-eef8ad10fc7a","type":"ResetTool"},{"attributes":{"data_source":{"id":"cc44e76d-270c-4735-9ab0-993340dd38fa","type":"ColumnDataSource"},"glyph":{"id":"26429e47-f15e-4068-a685-3e6ae3fa34c1","type":"Text"},"hover_glyph":null,"muted_glyph":null},"id":"0cae8c7f-3bdb-42f6-b32d-32df3b56a4b8","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"f42835f6-ecc1-4548-8aae-aee44959561e","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"daf12c15-2ee8-43c8-b124-6d016174cc7e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3c00d617-884f-47d7-a8fb-9b1da30b37a9","type":"BoxAnnotation"},{"id":"6248e7c3-6338-4bb8-bc79-3db74dafa77b","type":"GlyphRenderer"},{"id":"0cae8c7f-3bdb-42f6-b32d-32df3b56a4b8","type":"GlyphRenderer"},{"id":"55aead1e-8cf6-4089-924e-bf522729b26f","type":"Legend"},{"id":"f42835f6-ecc1-4548-8aae-aee44959561e","type":"LinearAxis"},{"id":"daf12c15-2ee8-43c8-b124-6d016174cc7e","type":"LinearAxis"}],"title":{"id":"a54b2120-a185-4e18-95c4-5b4b7a5f8e33","type":"Title"},"tool_events":{"id":"66d63d63-03b6-47af-8e98-40f8d60d3078","type":"ToolEvents"},"toolbar":{"id":"40f442dc-096f-42ec-b148-0f547bf6aaad","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"99d63c0a-bc4e-4cbd-ad8b-14b557aea834","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"707632b9-8f23-4b5b-af19-00ca6fff64ca","type":"Range1d"}},"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"b9b8bbe8-7c74-4fff-87a3-92da8f383397","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"707632b9-8f23-4b5b-af19-00ca6fff64ca","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5e146294-c3f4-423c-9a6b-6c234859ce16","type":"PanTool"},{"id":"8d928100-d45d-4780-ba4d-5ea1cb79e995","type":"WheelZoomTool"},{"id":"e2eda0c0-3b44-4d8d-9d6a-5d78dbef79dd","type":"BoxZoomTool"},{"id":"efce4241-d3ae-4810-8b21-90d6f31aa09e","type":"SaveTool"},{"id":"8bf5a86b-07d7-448d-a159-eef8ad10fc7a","type":"ResetTool"},{"id":"0915c4f0-d0a6-4f16-a9c4-235c164a1c06","type":"HelpTool"},{"id":"79272c1e-526f-4ab6-a2cc-e705af534958","type":"HoverTool"}]},"id":"40f442dc-096f-42ec-b148-0f547bf6aaad","type":"Toolbar"},{"attributes":{"data_source":{"id":"962b528b-5300-478d-947f-6c9418b7064d","type":"ColumnDataSource"},"glyph":{"id":"81cb70db-9fea-4ed9-b46a-1f26e46e6080","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null},"id":"6248e7c3-6338-4bb8-bc79-3db74dafa77b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"}},"id":"8d928100-d45d-4780-ba4d-5ea1cb79e995","type":"WheelZoomTool"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26429e47-f15e-4068-a685-3e6ae3fa34c1","type":"Text"},{"attributes":{"axis_label":null,"formatter":{"id":"b9b8bbe8-7c74-4fff-87a3-92da8f383397","type":"BasicTickFormatter"},"plot":{"id":"7937de04-bf73-40dd-8a95-f388cb65139c","subtype":"Chart","type":"Plot"},"ticker":{"id":"ec038a85-aff6-41c5-ac67-cd1983ddde7e","type":"BasicTicker"},"visible":false},"id":"daf12c15-2ee8-43c8-b124-6d016174cc7e","type":"LinearAxis"}],"root_ids":["7937de04-bf73-40dd-8a95-f388cb65139c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"7e9e18da-c008-487f-8079-ac491dc7469e","elementid":"6301c79b-ee4b-4924-a58d-ea8a25bd04e9","modelid":"7937de04-bf73-40dd-8a95-f388cb65139c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
