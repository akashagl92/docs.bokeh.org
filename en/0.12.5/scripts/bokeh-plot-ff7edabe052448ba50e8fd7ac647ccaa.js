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
      };var element = document.getElementById("e4a925c6-5c60-4704-a8ce-83dd783e336b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e4a925c6-5c60-4704-a8ce-83dd783e336b' but no matching script tag was found. ")
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
                var docs_json = {"9647388b-33f0-4d90-8465-fb60da8ff8c6":{"roots":{"references":[{"attributes":{"data_source":{"id":"888957fd-618f-4fd5-ac3b-6962fd06a224","type":"ColumnDataSource"},"glyph":{"id":"a4dc1085-d12f-45c0-8e04-540cfcdb6268","type":"Text"},"hover_glyph":null,"muted_glyph":null},"id":"2875dab9-b53d-489c-889b-c967af40acc1","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"}},"id":"39102e34-c69c-4bcc-bb9d-ffeaaa507e88","type":"ResetTool"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"988b59c8-8db8-46e4-b26c-faf43704e8e2","type":"Range1d"},{"attributes":{"callback":null,"end":3.1500000000000004,"start":-3.1500000000000004},"id":"34ad5c07-9b6e-4346-af7f-eff5bed0dd10","type":"Range1d"},{"attributes":{"end_angle":{"field":"end","units":"rad"},"fill_alpha":{"value":0.8},"fill_color":{"field":"color"},"inner_radius":{"field":"inners","units":"data"},"line_color":{"value":"White"},"outer_radius":{"field":"outers","units":"data"},"start_angle":{"field":"start","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"4a9b3b6d-f6a6-4482-915f-11dc9b0475b9","type":"AnnularWedge"},{"attributes":{"overlay":{"id":"5cedbbc4-8443-4414-8a8f-80f8f159a9f1","type":"BoxAnnotation"},"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"}},"id":"bb5bfddb-9484-4828-bc53-d1819bf33dae","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e9c46ead-9ad4-4b38-bc36-ed42e40e550a","type":"PanTool"},{"id":"57273e48-b0d5-4da9-ac1b-f7454f661689","type":"WheelZoomTool"},{"id":"bb5bfddb-9484-4828-bc53-d1819bf33dae","type":"BoxZoomTool"},{"id":"d1c44316-cd7b-4d0a-85fd-906a2bfe3c71","type":"SaveTool"},{"id":"39102e34-c69c-4bcc-bb9d-ffeaaa507e88","type":"ResetTool"},{"id":"e0fe0d67-510b-46dc-9e4a-74638d58f62d","type":"HelpTool"},{"id":"5b6ac4bd-6266-4eb0-a896-729a3fb8b559","type":"HoverTool"}]},"id":"664b3d94-46fb-45a1-b9b0-d206dd9a8fa5","type":"Toolbar"},{"attributes":{"location":"top_left","plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"}},"id":"db2d2dbf-a3ba-4ea6-8d21-8b0de77370eb","type":"Legend"},{"attributes":{},"id":"a162f2df-bf4c-47f6-bea5-7ef68b9975ae","type":"BasicTickFormatter"},{"attributes":{},"id":"ab63356a-480b-42d9-8c53-d83e6fc9c704","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7bb03c97-4eba-4f47-85f5-5dfb04502951","type":"ColumnDataSource"},"glyph":{"id":"4a9b3b6d-f6a6-4482-915f-11dc9b0475b9","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null},"id":"0ec5a3f4-2b1d-4a92-81dd-e81bbee0db1b","type":"GlyphRenderer"},{"attributes":{"angle":{"field":"text_angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_font_size":{"value":"8pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4dc1085-d12f-45c0-8e04-540cfcdb6268","type":"Text"},{"attributes":{},"id":"7c382227-ad5c-493d-8d32-dfb28748a263","type":"BasicTickFormatter"},{"attributes":{"callback":null,"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"},"tooltips":[["Medal_Count","@values"]]},"id":"5b6ac4bd-6266-4eb0-a896-729a3fb8b559","type":"HoverTool"},{"attributes":{},"id":"6d93c1ea-2041-48ed-ac68-ff9c6c3ce17a","type":"ToolEvents"},{"attributes":{"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"}},"id":"d1c44316-cd7b-4d0a-85fd-906a2bfe3c71","type":"SaveTool"},{"attributes":{"axis_label":null,"formatter":{"id":"a162f2df-bf4c-47f6-bea5-7ef68b9975ae","type":"BasicTickFormatter"},"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"},"ticker":{"id":"ab63356a-480b-42d9-8c53-d83e6fc9c704","type":"BasicTicker"},"visible":false},"id":"d4fd780b-06de-4848-9d0c-820cb84b2cb3","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5cedbbc4-8443-4414-8a8f-80f8f159a9f1","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":null},"id":"db57c49b-4b84-4c5b-8e11-5b99d3d5b3d4","type":"Title"},{"attributes":{},"id":"63bba5af-193e-4876-b88c-908c47b83581","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["text","text_angle","x","y"],"data":{"text":["AUT","bronze","gold","silver","CAN","bronze","gold","silver","CHE","bronze","gold","silver","DEU","bronze","gold","silver","FRA","bronze","gold","silver","NLD","bronze","gold","silver","NOR","bronze","gold","silver","RUS","bronze","gold","silver","SWE","bronze","gold","silver","USA","bronze","gold","silver"],"text_angle":{"__ndarray__":"AAAAAAAAAADXEx/QLZeVP9cTH9Atl7U/4U4XXGIx0D8AAAAAAAAAAEi7Kv7er90/miId87o95D8KyighbFbsPwAAAAAAAAAA0MPYgXg08T/7KZyEAZHzP8WI4PVDmvY/AAAAAAAAAADw7qP4zPb4PzaHDA7H0RNAEN39BUa/FEAAAAAAAAAAAK/VfnT/axVATs7/4rgYFkCxaRDIrIQWQAAAAAAAAAAAeKAxkpRcF0COU5MT2YoYQHzIVDnvjRlAAAAAAAAAAAB9XOaMnKYaQKYuGDx46htAlKPZYY7tHEAAAAAAAAAAAG/5ylkN2x1AcY1crbrzHkD6KZyEAZETQAAAAAAAAAAAwGC9TuloFEAQ3f0FRr8UQJq2rkZoVhVAAAAAAAAAAADEiOD1Q5oWQAF64tK28xdAyLADnZ7LGEA=","dtype":"float64","shape":[40]},"x":[1.104805590886699,2.249499892184141,2.2420027205170387,2.178365181744732,0.8480965760393239,2.012248106600736,1.8146951444761354,1.4239441276355629,0.33860820772678335,1.069783512354476,0.767068174776323,0.35432015483704005,-0.24703129626183343,0.023719639391054256,-0.5402316686595636,-1.0278139286434214,-0.7656082347002524,-1.3492377266828857,-1.6323644399957808,-1.786247649071937,-1.104805590886699,-2.0330241374833724,-2.2255382623177966,-2.2375084170483754,-0.907347572238068,-2.0898947329938067,-1.7269834802180628,-1.3109764694102914,-0.1065802755027028,-0.855556114876951,-0.2603364557048132,0.4010861697298566,0.5761387742118242,0.8555561148769484,1.0278139286434202,1.3109764694102874,1.0264482036225655,1.8146951444761343,2.1526849395915697,2.2420027205170387],"y":[0.21220180570742547,0.04743664262507488,0.18953575175727672,0.5632274273881197,0.7391597917300259,1.0066566234231777,1.3301810149805693,1.7420915938526873,1.0728324574042565,1.9794098202985961,2.11520836213488,2.221926467702353,1.0975429552720013,2.2498749695721223,2.184181710430088,2.0015240513385235,0.8242991149814265,1.8005714528714485,1.5485110057849962,1.3681444865894021,0.21220180570742506,0.9640087429115932,0.3308767791179715,-0.23676165998250986,-0.6650905074902843,-0.8335706358820144,-1.4422302378794822,-1.8286171542049274,-1.1199400184267763,-2.0809910461836827,-2.234888124678964,-2.213962484878963,-0.9662758989283012,-2.0809910461836836,-2.001524051338524,-1.82861715420493,-0.46046616084138936,-1.3301810149805708,-0.6545590507017991,-0.18953575175727855]}},"id":"888957fd-618f-4fd5-ac3b-6962fd06a224","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"}},"id":"e9c46ead-9ad4-4b38-bc36-ed42e40e550a","type":"PanTool"},{"attributes":{"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"}},"id":"e0fe0d67-510b-46dc-9e4a-74638d58f62d","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["abbr_medal","inners","end","start","level","centers","color","values","outers"],"data":{"abbr_medal":[["AUT",""],["AUT","bronze"],["AUT","gold"],["AUT","silver"],["CAN",""],["CAN","bronze"],["CAN","gold"],["CAN","silver"],["CHE",""],["CHE","bronze"],["CHE","gold"],["CHE","silver"],["DEU",""],["DEU","bronze"],["DEU","gold"],["DEU","silver"],["FRA",""],["FRA","bronze"],["FRA","gold"],["FRA","silver"],["NLD",""],["NLD","bronze"],["NLD","gold"],["NLD","silver"],["NOR",""],["NOR","bronze"],["NOR","gold"],["NOR","silver"],["RUS",""],["RUS","bronze"],["RUS","gold"],["RUS","silver"],["SWE",""],["SWE","bronze"],["SWE","gold"],["SWE","silver"],["USA",""],["USA","bronze"],["USA","gold"],["USA","silver"]],"centers":{"__ndarray__":"AAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkAAAAAAAADyPwAAAAAAAAJAAAAAAAAAAkAAAAAAAAACQAAAAAAAAPI/AAAAAAAAAkAAAAAAAAACQAAAAAAAAAJAAAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkAAAAAAAADyPwAAAAAAAAJAAAAAAAAAAkAAAAAAAAACQAAAAAAAAPI/AAAAAAAAAkAAAAAAAAACQAAAAAAAAAJAAAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkAAAAAAAADyPwAAAAAAAAJAAAAAAAAAAkAAAAAAAAACQAAAAAAAAPI/AAAAAAAAAkAAAAAAAAACQAAAAAAAAAJAAAAAAAAA8j8AAAAAAAACQAAAAAAAAAJAAAAAAAAAAkA=","dtype":"float64","shape":[40]},"color":["#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320","#00ad9c","#00ad9c","#00ad9c","#00ad9c","#c33ff3","#c33ff3","#c33ff3","#c33ff3","#f22c40","#f22c40","#f22c40","#f22c40","#5ab738","#5ab738","#5ab738","#5ab738","#407ee7","#407ee7","#407ee7","#407ee7","#df5320","#df5320","#df5320","#df5320"],"end":{"__ndarray__":"UvYiihNK2D/XEx/QLZelP+FOF1xiMcA/UvYiihNK2D+AR5jKG97wPx9AGTnViuE/FQUhraDw5j+AR5jKG97wP7P9oRtanfc/H0AZOdWK8T/XEx/QLZf1P7P9oRtanfc/gEeYyhveAEAu4KXVP1D6PySlrUkLtv8/gEeYyhveAECaIh3zuj0EQA212l7rjQJA+ymchAGRA0CaIh3zuj0EQM3YJkT5/ApAFQUhraDwBkDx7qP4zPYIQM3YJkT5/ApAWAn4bu2yEED4PupGglkNQLkQdwA0BhBAWAn4bu2yEECZIh3zuj0UQG68WfAx4RFAXDEbFkjkEkCZIh3zuj0UQP5RvytcwhVA6J5dqheUFEA3G55hdOoUQP1RvytcwhVAGC1EVPshGUCKvwHAK3IXQHg0w+VBdRhAFy1EVPshGUA=","dtype":"float64","shape":[40]},"inners":{"__ndarray__":"AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8AAAAAAAAAAAAAAAAAAPg/AAAAAAAA+D8AAAAAAAD4PwAAAAAAAAAAAAAAAAAA+D8AAAAAAAD4PwAAAAAAAPg/AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8AAAAAAAAAAAAAAAAAAPg/AAAAAAAA+D8AAAAAAAD4PwAAAAAAAAAAAAAAAAAA+D8AAAAAAAD4PwAAAAAAAPg/AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8AAAAAAAAAAAAAAAAAAPg/AAAAAAAA+D8AAAAAAAD4PwAAAAAAAAAAAAAAAAAA+D8AAAAAAAD4PwAAAAAAAPg/AAAAAAAAAAAAAAAAAAD4PwAAAAAAAPg/AAAAAAAA+D8=","dtype":"float64","shape":[40]},"level":{"__ndarray__":"AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAAAAAAAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAAAAAAAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8=","dtype":"float64","shape":[40]},"outers":{"__ndarray__":"AAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAD4PwAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAPg/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAD4PwAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAPg/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEAAAAAAAAD4PwAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQAAAAAAAAPg/AAAAAAAACEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAA+D8AAAAAAAAIQAAAAAAAAAhAAAAAAAAACEA=","dtype":"float64","shape":[40]},"start":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAANcTH9Atl6U/4U4XXGIxwD9S9iKKE0rYP1L2IooTStg/H0AZOdWK4T8VBSGtoPDmP4BHmMob3vA/gEeYyhve8D8fQBk51YrxP9cTH9Atl/U/s/2hG1qd9z+z/aEbWp33Py7gpdU/UPo/JKWtSQu2/z+AR5jKG94AQIBHmMob3gBADbXaXuuNAkD7KZyEAZEDQJoiHfO6PQRAmiId87o9BEAVBSGtoPAGQPHuo/jM9ghAzdgmRPn8CkDN2CZE+fwKQPg+6kaCWQ1AuRB3ADQGEEBYCfhu7bIQQFgJ+G7tshBAbrxZ8DHhEUBcMRsWSOQSQJkiHfO6PRRAmSId87o9FEDonl2qF5QUQDcbnmF06hRA/lG/K1zCFUD9Ub8rXMIVQIq/AcArchdAeDTD5UF1GEA=","dtype":"float64","shape":[40]},"values":[9,1,2,6,16,4,4,8,10,1,6,3,15,4,8,3,10,5,3,2,20,8,6,6,19,7,8,4,21,7,6,8,9,2,2,5,20,10,6,4]}},"id":"7bb03c97-4eba-4f47-85f5-5dfb04502951","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"d4fd780b-06de-4848-9d0c-820cb84b2cb3","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"43578ff0-f28f-40dd-ad0a-0afdd6059f7f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5cedbbc4-8443-4414-8a8f-80f8f159a9f1","type":"BoxAnnotation"},{"id":"0ec5a3f4-2b1d-4a92-81dd-e81bbee0db1b","type":"GlyphRenderer"},{"id":"2875dab9-b53d-489c-889b-c967af40acc1","type":"GlyphRenderer"},{"id":"db2d2dbf-a3ba-4ea6-8d21-8b0de77370eb","type":"Legend"},{"id":"d4fd780b-06de-4848-9d0c-820cb84b2cb3","type":"LinearAxis"},{"id":"43578ff0-f28f-40dd-ad0a-0afdd6059f7f","type":"LinearAxis"}],"title":{"id":"db57c49b-4b84-4c5b-8e11-5b99d3d5b3d4","type":"Title"},"tool_events":{"id":"6d93c1ea-2041-48ed-ac68-ff9c6c3ce17a","type":"ToolEvents"},"toolbar":{"id":"664b3d94-46fb-45a1-b9b0-d206dd9a8fa5","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"34ad5c07-9b6e-4346-af7f-eff5bed0dd10","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"988b59c8-8db8-46e4-b26c-faf43704e8e2","type":"Range1d"}},"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":null,"formatter":{"id":"7c382227-ad5c-493d-8d32-dfb28748a263","type":"BasicTickFormatter"},"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"},"ticker":{"id":"63bba5af-193e-4876-b88c-908c47b83581","type":"BasicTicker"},"visible":false},"id":"43578ff0-f28f-40dd-ad0a-0afdd6059f7f","type":"LinearAxis"},{"attributes":{"plot":{"id":"48a6e2fd-1156-4955-82f8-4d144bf9b214","subtype":"Chart","type":"Plot"}},"id":"57273e48-b0d5-4da9-ac1b-f7454f661689","type":"WheelZoomTool"}],"root_ids":["48a6e2fd-1156-4955-82f8-4d144bf9b214"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"9647388b-33f0-4d90-8465-fb60da8ff8c6","elementid":"e4a925c6-5c60-4704-a8ce-83dd783e336b","modelid":"48a6e2fd-1156-4955-82f8-4d144bf9b214"}];
                
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
