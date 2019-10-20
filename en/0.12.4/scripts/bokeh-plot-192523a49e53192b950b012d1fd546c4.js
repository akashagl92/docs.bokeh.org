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
      };var element = document.getElementById("46294b6f-a5e7-4153-a95c-49ea1f8df794");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '46294b6f-a5e7-4153-a95c-49ea1f8df794' but no matching script tag was found. ")
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
                var docs_json = {"b73aaa10-7df9-409c-97d1-7d047c7a389a":{"roots":{"references":[{"attributes":{},"id":"66d9b2da-59b2-4c5b-8f33-e7f979b78eed","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"ad75645b-fe2d-45fa-900f-6a805b01dc43","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"a45d20f7-d477-4739-93d1-efdd9840d9d5","type":"LinearAxis"}],"renderers":[{"id":"64539bf6-c58a-4018-a8b2-d45943ae1985","type":"BoxAnnotation"},{"id":"08c2bccb-6f49-4d30-888e-47eebbd1e907","type":"GlyphRenderer"},{"id":"85fa6c87-6982-4cd0-ba59-91076a9c069d","type":"Legend"},{"id":"ad75645b-fe2d-45fa-900f-6a805b01dc43","type":"LinearAxis"},{"id":"a45d20f7-d477-4739-93d1-efdd9840d9d5","type":"LinearAxis"},{"id":"8e63b372-8156-4f62-bcba-cc0d096d39e5","type":"Grid"},{"id":"aa8ad856-9770-4db6-be4e-e4085da22f8f","type":"Grid"}],"title":{"id":"b992081e-a873-45d4-b759-654aefea4d9c","type":"Title"},"tool_events":{"id":"a0295f46-6950-4d60-985e-82cd3b19d816","type":"ToolEvents"},"toolbar":{"id":"7411cedf-9bf6-454d-b8c1-843f49062cf3","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"403e3c71-567f-4d6f-bf6a-68d56da94093","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"8d98db41-2503-4f84-a3cb-8e8e11ac423e","type":"Range1d"}},"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"},"ticker":{"id":"e7d492e9-7d8f-4680-b5d9-c6207d2837e5","type":"BasicTicker"}},"id":"8e63b372-8156-4f62-bcba-cc0d096d39e5","type":"Grid"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"66d9b2da-59b2-4c5b-8f33-e7f979b78eed","type":"BasicTickFormatter"},"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"},"ticker":{"id":"e7d492e9-7d8f-4680-b5d9-c6207d2837e5","type":"BasicTicker"}},"id":"ad75645b-fe2d-45fa-900f-6a805b01dc43","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"},"ticker":{"id":"1c7896fa-2884-4787-88f4-f3f503e00a23","type":"BasicTicker"}},"id":"aa8ad856-9770-4db6-be4e-e4085da22f8f","type":"Grid"},{"attributes":{"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"}},"id":"ee6df54c-d192-4664-ad1c-3567772b646d","type":"HelpTool"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"8d98db41-2503-4f84-a3cb-8e8e11ac423e","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"x_values":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQAAAAAAAADtAAAAAAAAAPEAAAAAAAAA5QAAAAAAAADNAAAAAAAAAMEAAAAAAAAAxQAAAAAAAADNAAAAAAAAAMkAAAAAAAAAsQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAADJAAAAAAAAANkAAAAAAAAAzQAAAAAAAADJAAAAAAAAAN0AAAAAAAAA8QAAAAAAAAD5AAAAAAAAAPkAAAAAAAAA/QAAAAAAAgEFAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA3QAAAAAAAADRAAAAAAAAANUAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADFAAAAAAAAAJkAAAAAAAAAqQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADVAAAAAAAAAOkAAAAAAAAA2QAAAAAAAADxAAAAAAAAAN0AAAAAAAAA8QAAAAAAAADtAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAA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","dtype":"float64","shape":[392]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,95,95,97,85,88,46,87,90,95,113,90,215,200,210,193,88,90,95,100,105,100,88,100,165,175,153,150,180,170,175,110,72,100,88,86,90,70,76,65,69,60,70,95,80,54,90,86,165,175,150,153,150,208,155,160,190,97,150,130,140,150,112,76,87,69,86,92,97,80,88,175,150,145,137,150,198,150,158,150,215,225,175,105,100,100,88,95,46,150,167,170,180,100,88,72,94,90,85,107,90,145,230,49,75,91,112,150,110,122,180,95,100,100,67,80,65,75,100,110,105,140,150,150,140,150,83,67,78,52,61,75,75,75,97,93,67,95,105,72,72,170,145,150,148,110,105,110,95,110,110,129,75,83,100,78,96,71,97,97,70,90,95,88,98,115,53,86,81,92,79,83,140,150,120,152,100,105,81,90,52,60,70,53,100,78,110,95,71,70,75,72,102,150,88,108,120,180,145,130,150,68,80,58,96,70,145,110,145,130,110,105,100,98,180,170,190,149,78,88,75,89,63,83,67,78,97,110,110,48,66,52,70,60,110,140,139,105,95,85,88,100,90,105,85,110,120,145,165,139,140,68,95,97,75,95,105,85,97,103,125,115,133,71,68,115,85,88,90,110,130,129,138,135,155,142,125,150,71,65,80,80,77,125,71,90,70,70,65,69,90,115,115,90,76,60,70,65,90,88,90,90,78,90,75,92,75,65,105,65,48,48,67,67,67,67,62,132,100,88,72,84,84,92,110,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,76,116,120,110,105,88,85,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,110,85,92,112,96,84,90,86,52,84,79,82]}},"id":"e9ba9445-e8af-4762-bd49-808b810b58aa","type":"ColumnDataSource"},{"attributes":{"location":"top_left","plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"}},"id":"85fa6c87-6982-4cd0-ba59-91076a9c069d","type":"Legend"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"403e3c71-567f-4d6f-bf6a-68d56da94093","type":"Range1d"},{"attributes":{},"id":"e7d492e9-7d8f-4680-b5d9-c6207d2837e5","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e308b1fe-f60e-4c96-b099-f52a3dc69298","type":"Circle"},{"attributes":{"data_source":{"id":"e9ba9445-e8af-4762-bd49-808b810b58aa","type":"ColumnDataSource"},"glyph":{"id":"e308b1fe-f60e-4c96-b099-f52a3dc69298","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"08c2bccb-6f49-4d30-888e-47eebbd1e907","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"64539bf6-c58a-4018-a8b2-d45943ae1985","type":"BoxAnnotation"},"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"}},"id":"dbb0e5ff-1cd4-43aa-a82c-bfca9ea05a7b","type":"BoxZoomTool"},{"attributes":{},"id":"a0295f46-6950-4d60-985e-82cd3b19d816","type":"ToolEvents"},{"attributes":{"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"}},"id":"916031e6-cc7d-4f01-81de-ff8e7042a925","type":"ResetTool"},{"attributes":{"plot":null,"text":"HP vs MPG"},"id":"b992081e-a873-45d4-b759-654aefea4d9c","type":"Title"},{"attributes":{"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"}},"id":"cb856555-883d-4db8-9432-9dd4d889d15b","type":"WheelZoomTool"},{"attributes":{},"id":"1c7896fa-2884-4787-88f4-f3f503e00a23","type":"BasicTicker"},{"attributes":{"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"}},"id":"5c2bdec3-be30-45b0-8b7c-18e2abee6967","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5c2bdec3-be30-45b0-8b7c-18e2abee6967","type":"PanTool"},{"id":"cb856555-883d-4db8-9432-9dd4d889d15b","type":"WheelZoomTool"},{"id":"dbb0e5ff-1cd4-43aa-a82c-bfca9ea05a7b","type":"BoxZoomTool"},{"id":"27bfa14f-a123-4fba-9fa3-e50251150b38","type":"SaveTool"},{"id":"916031e6-cc7d-4f01-81de-ff8e7042a925","type":"ResetTool"},{"id":"ee6df54c-d192-4664-ad1c-3567772b646d","type":"HelpTool"}]},"id":"7411cedf-9bf6-454d-b8c1-843f49062cf3","type":"Toolbar"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"ada41796-ae8d-4492-9222-115bd7956f71","type":"BasicTickFormatter"},"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"},"ticker":{"id":"1c7896fa-2884-4787-88f4-f3f503e00a23","type":"BasicTicker"}},"id":"a45d20f7-d477-4739-93d1-efdd9840d9d5","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"64539bf6-c58a-4018-a8b2-d45943ae1985","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"37dee846-46c1-44ec-b64b-bb11ab570fe1","subtype":"Chart","type":"Plot"}},"id":"27bfa14f-a123-4fba-9fa3-e50251150b38","type":"SaveTool"},{"attributes":{},"id":"ada41796-ae8d-4492-9222-115bd7956f71","type":"BasicTickFormatter"}],"root_ids":["37dee846-46c1-44ec-b64b-bb11ab570fe1"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"b73aaa10-7df9-409c-97d1-7d047c7a389a","elementid":"46294b6f-a5e7-4153-a95c-49ea1f8df794","modelid":"37dee846-46c1-44ec-b64b-bb11ab570fe1"}];
                
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
