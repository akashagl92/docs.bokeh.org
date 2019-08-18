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
      };var element = document.getElementById("d1858ead-21cc-4159-9829-c5acbd3655df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd1858ead-21cc-4159-9829-c5acbd3655df' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"2700842d-c5b7-4a91-810c-f6e4b33cec6a":{"roots":{"references":[{"attributes":{"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"},"ticker":{"id":"e96d0830-fd20-47a1-a87a-3feab7bb69dc","type":"BasicTicker"}},"id":"b7827933-a49c-42dc-bbe8-900217b085f3","type":"Grid"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"59f52ecd-470f-489c-838a-e105f894e7a2","type":"BasicTickFormatter"},"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"},"ticker":{"id":"e96d0830-fd20-47a1-a87a-3feab7bb69dc","type":"BasicTicker"}},"id":"a19a5173-1c6f-4c39-9ddf-7502e0c4e341","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"441d83a9-9586-406c-9542-6475355b03a2","type":"PanTool"},{"id":"1d24642a-f31f-4237-8d78-47c37bb1b855","type":"WheelZoomTool"},{"id":"f17ceeeb-de8b-4662-bec1-26130df395f3","type":"BoxZoomTool"},{"id":"bf2effa8-6b52-4fbc-9240-89234521ab37","type":"SaveTool"},{"id":"d14f400e-d01b-4821-bb78-3808c9c9a6cd","type":"ResetTool"},{"id":"54b44947-d0f4-4189-b848-a814c52e7ae5","type":"HelpTool"}]},"id":"eaff9dcc-b084-4dd0-bec4-a798912e41ee","type":"Toolbar"},{"attributes":{},"id":"59f52ecd-470f-489c-838a-e105f894e7a2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"6eda07f3-4209-43e5-a18c-1ae09173f998","type":"Range1d"},{"attributes":{},"id":"cfabe751-5af6-475c-b762-0cfae5c4499c","type":"ToolEvents"},{"attributes":{},"id":"e96d0830-fd20-47a1-a87a-3feab7bb69dc","type":"BasicTicker"},{"attributes":{"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"}},"id":"54b44947-d0f4-4189-b848-a814c52e7ae5","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"navy"},"line_color":{"value":"navy"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"fc4c7df1-108e-46b4-8007-8826bc5cd854","type":"Circle"},{"attributes":{"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"}},"id":"441d83a9-9586-406c-9542-6475355b03a2","type":"PanTool"},{"attributes":{},"id":"ec0a3de5-2412-46c3-89ab-97d353fc1796","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"ec0a3de5-2412-46c3-89ab-97d353fc1796","type":"BasicTickFormatter"},"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"},"ticker":{"id":"d5296649-d385-4e55-8a9d-5205df69fa41","type":"BasicTicker"}},"id":"f70b8136-c917-44ae-8670-f323c7b01377","type":"LinearAxis"},{"attributes":{"location":"top_left","plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"}},"id":"84cde187-1088-4742-889d-6b6ed7369c81","type":"Legend"},{"attributes":{},"id":"d5296649-d385-4e55-8a9d-5205df69fa41","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6cb4e0df-2434-4925-a354-3c2e2fa9f72d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"}},"id":"1d24642a-f31f-4237-8d78-47c37bb1b855","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQAAAAAAAADtAAAAAAAAAPEAAAAAAAAA5QAAAAAAAADNAAAAAAAAAMEAAAAAAAAAxQAAAAAAAADNAAAAAAAAAMkAAAAAAAAAsQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAADJAAAAAAAAANkAAAAAAAAAzQAAAAAAAADJAAAAAAAAAN0AAAAAAAAA8QAAAAAAAAD5AAAAAAAAAPkAAAAAAAAA/QAAAAAAAgEFAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA3QAAAAAAAADRAAAAAAAAANUAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADFAAAAAAAAAJkAAAAAAAAAqQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADVAAAAAAAAAOkAAAAAAAAA2QAAAAAAAADxAAAAAAAAAN0AAAAAAAAA8QAAAAAAAADtAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAA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","dtype":"float64","shape":[392]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,95,95,97,85,88,46,87,90,95,113,90,215,200,210,193,88,90,95,100,105,100,88,100,165,175,153,150,180,170,175,110,72,100,88,86,90,70,76,65,69,60,70,95,80,54,90,86,165,175,150,153,150,208,155,160,190,97,150,130,140,150,112,76,87,69,86,92,97,80,88,175,150,145,137,150,198,150,158,150,215,225,175,105,100,100,88,95,46,150,167,170,180,100,88,72,94,90,85,107,90,145,230,49,75,91,112,150,110,122,180,95,100,100,67,80,65,75,100,110,105,140,150,150,140,150,83,67,78,52,61,75,75,75,97,93,67,95,105,72,72,170,145,150,148,110,105,110,95,110,110,129,75,83,100,78,96,71,97,97,70,90,95,88,98,115,53,86,81,92,79,83,140,150,120,152,100,105,81,90,52,60,70,53,100,78,110,95,71,70,75,72,102,150,88,108,120,180,145,130,150,68,80,58,96,70,145,110,145,130,110,105,100,98,180,170,190,149,78,88,75,89,63,83,67,78,97,110,110,48,66,52,70,60,110,140,139,105,95,85,88,100,90,105,85,110,120,145,165,139,140,68,95,97,75,95,105,85,97,103,125,115,133,71,68,115,85,88,90,110,130,129,138,135,155,142,125,150,71,65,80,80,77,125,71,90,70,70,65,69,90,115,115,90,76,60,70,65,90,88,90,90,78,90,75,92,75,65,105,65,48,48,67,67,67,67,62,132,100,88,72,84,84,92,110,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,76,116,120,110,105,88,85,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,110,85,92,112,96,84,90,86,52,84,79,82]}},"id":"969f8fb3-309e-4b4c-ac0e-3675b28f1064","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"}},"id":"d14f400e-d01b-4821-bb78-3808c9c9a6cd","type":"ResetTool"},{"attributes":{"data_source":{"id":"969f8fb3-309e-4b4c-ac0e-3675b28f1064","type":"ColumnDataSource"},"glyph":{"id":"fc4c7df1-108e-46b4-8007-8826bc5cd854","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2f2b474a-7572-45b7-b2f6-d97ebe07c534","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"f85bf070-1bef-405a-a0fe-1aacad6503a5","type":"Range1d"},{"attributes":{"overlay":{"id":"6cb4e0df-2434-4925-a354-3c2e2fa9f72d","type":"BoxAnnotation"},"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"}},"id":"f17ceeeb-de8b-4662-bec1-26130df395f3","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"},"ticker":{"id":"d5296649-d385-4e55-8a9d-5205df69fa41","type":"BasicTicker"}},"id":"16ebef2e-fca9-4b9c-af22-c65a96c1f827","type":"Grid"},{"attributes":{"plot":null,"text":"HP vs MPG"},"id":"65dc81ec-f9df-4c38-8d87-f85d908727fe","type":"Title"},{"attributes":{"below":[{"id":"a19a5173-1c6f-4c39-9ddf-7502e0c4e341","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"f70b8136-c917-44ae-8670-f323c7b01377","type":"LinearAxis"}],"renderers":[{"id":"6cb4e0df-2434-4925-a354-3c2e2fa9f72d","type":"BoxAnnotation"},{"id":"2f2b474a-7572-45b7-b2f6-d97ebe07c534","type":"GlyphRenderer"},{"id":"84cde187-1088-4742-889d-6b6ed7369c81","type":"Legend"},{"id":"a19a5173-1c6f-4c39-9ddf-7502e0c4e341","type":"LinearAxis"},{"id":"f70b8136-c917-44ae-8670-f323c7b01377","type":"LinearAxis"},{"id":"b7827933-a49c-42dc-bbe8-900217b085f3","type":"Grid"},{"id":"16ebef2e-fca9-4b9c-af22-c65a96c1f827","type":"Grid"}],"title":{"id":"65dc81ec-f9df-4c38-8d87-f85d908727fe","type":"Title"},"tool_events":{"id":"cfabe751-5af6-475c-b762-0cfae5c4499c","type":"ToolEvents"},"toolbar":{"id":"eaff9dcc-b084-4dd0-bec4-a798912e41ee","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"6eda07f3-4209-43e5-a18c-1ae09173f998","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f85bf070-1bef-405a-a0fe-1aacad6503a5","type":"Range1d"}},"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"8e16a454-9f71-491b-bf35-f93bae6b7039","subtype":"Chart","type":"Plot"}},"id":"bf2effa8-6b52-4fbc-9240-89234521ab37","type":"SaveTool"}],"root_ids":["8e16a454-9f71-491b-bf35-f93bae6b7039"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"2700842d-c5b7-4a91-810c-f6e4b33cec6a","elementid":"d1858ead-21cc-4159-9829-c5acbd3655df","modelid":"8e16a454-9f71-491b-bf35-f93bae6b7039"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
