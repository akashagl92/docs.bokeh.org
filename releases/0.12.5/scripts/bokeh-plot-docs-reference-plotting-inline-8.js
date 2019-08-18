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
      };var element = document.getElementById("08c39c73-2c7a-4ee9-9965-02cd977b4ba5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '08c39c73-2c7a-4ee9-9965-02cd977b4ba5' but no matching script tag was found. ")
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
                var docs_json = {"19f17890-a8e7-4937-a9ab-91a70b96a91d":{"roots":{"references":[{"attributes":{"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"}},"id":"7104f5a8-d436-477a-81a9-a188523aec97","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"310feee7-82d1-4a9b-a1bb-a83b5fe6af5a","type":"PanTool"},{"id":"471577f1-39db-480c-b0d5-4e55f0945518","type":"WheelZoomTool"},{"id":"19469d17-0544-4fb0-a996-0048332b94e8","type":"BoxZoomTool"},{"id":"02a7710f-2b33-4959-946e-8e0db0f51b39","type":"SaveTool"},{"id":"7104f5a8-d436-477a-81a9-a188523aec97","type":"ResetTool"},{"id":"f268b652-5930-408c-a36c-8e1ac78df5d1","type":"HelpTool"}]},"id":"fcbfec88-d014-40c6-a60b-9e696ed6e761","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fa5af108-eee8-47c5-a3db-e73644ede77f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"b1238ccf-2f94-4c2a-aa7e-909dc81dd42e","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"be0a16e4-376a-4c68-bf2f-c1cf23f00394","type":"BasicTickFormatter"},"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0183cb3e-10f4-4690-bbbc-a7784ce75fb1","type":"BasicTicker"}},"id":"fa6a11e6-52a6-4e42-907b-3f59109ff7d9","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"81bd8a96-83f6-4b0f-8e92-f60d688d2ea0","type":"Ellipse"},{"attributes":{"data_source":{"id":"b1238ccf-2f94-4c2a-aa7e-909dc81dd42e","type":"ColumnDataSource"},"glyph":{"id":"92783c4c-bfc3-4534-b12e-783b624d8de2","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"81bd8a96-83f6-4b0f-8e92-f60d688d2ea0","type":"Ellipse"},"selection_glyph":null},"id":"ec99f1b7-e604-4042-ac53-19cb38bbe700","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"}},"id":"310feee7-82d1-4a9b-a1bb-a83b5fe6af5a","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"f596bbf0-cf1f-40fc-a0dd-22c03314d685","type":"Title"},{"attributes":{},"id":"eda97a27-64b6-4dac-90bd-e57bb81ce497","type":"ToolEvents"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"92783c4c-bfc3-4534-b12e-783b624d8de2","type":"Ellipse"},{"attributes":{"callback":null},"id":"c45e87a4-ccfc-4025-949e-17fb7e31826e","type":"DataRange1d"},{"attributes":{"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"},"ticker":{"id":"0183cb3e-10f4-4690-bbbc-a7784ce75fb1","type":"BasicTicker"}},"id":"3ae5d241-c41b-45fc-9aa3-dafccdec47aa","type":"Grid"},{"attributes":{"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"}},"id":"f268b652-5930-408c-a36c-8e1ac78df5d1","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"},"ticker":{"id":"890e9415-3e97-48f9-b7ff-4c847ded22ff","type":"BasicTicker"}},"id":"ce1f223b-9ade-4dc7-ab72-4b056750fbd1","type":"Grid"},{"attributes":{"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"}},"id":"02a7710f-2b33-4959-946e-8e0db0f51b39","type":"SaveTool"},{"attributes":{"overlay":{"id":"fa5af108-eee8-47c5-a3db-e73644ede77f","type":"BoxAnnotation"},"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"}},"id":"19469d17-0544-4fb0-a996-0048332b94e8","type":"BoxZoomTool"},{"attributes":{},"id":"0183cb3e-10f4-4690-bbbc-a7784ce75fb1","type":"BasicTicker"},{"attributes":{"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"}},"id":"471577f1-39db-480c-b0d5-4e55f0945518","type":"WheelZoomTool"},{"attributes":{},"id":"4659b848-cf27-4ae0-91b7-33171b50eb70","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"4659b848-cf27-4ae0-91b7-33171b50eb70","type":"BasicTickFormatter"},"plot":{"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"},"ticker":{"id":"890e9415-3e97-48f9-b7ff-4c847ded22ff","type":"BasicTicker"}},"id":"da0fe889-b543-429d-9a69-5cfd4db84f38","type":"LinearAxis"},{"attributes":{"below":[{"id":"fa6a11e6-52a6-4e42-907b-3f59109ff7d9","type":"LinearAxis"}],"left":[{"id":"da0fe889-b543-429d-9a69-5cfd4db84f38","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"fa6a11e6-52a6-4e42-907b-3f59109ff7d9","type":"LinearAxis"},{"id":"3ae5d241-c41b-45fc-9aa3-dafccdec47aa","type":"Grid"},{"id":"da0fe889-b543-429d-9a69-5cfd4db84f38","type":"LinearAxis"},{"id":"ce1f223b-9ade-4dc7-ab72-4b056750fbd1","type":"Grid"},{"id":"fa5af108-eee8-47c5-a3db-e73644ede77f","type":"BoxAnnotation"},{"id":"ec99f1b7-e604-4042-ac53-19cb38bbe700","type":"GlyphRenderer"}],"title":{"id":"f596bbf0-cf1f-40fc-a0dd-22c03314d685","type":"Title"},"tool_events":{"id":"eda97a27-64b6-4dac-90bd-e57bb81ce497","type":"ToolEvents"},"toolbar":{"id":"fcbfec88-d014-40c6-a60b-9e696ed6e761","type":"Toolbar"},"x_range":{"id":"c45e87a4-ccfc-4025-949e-17fb7e31826e","type":"DataRange1d"},"y_range":{"id":"b036b80f-f647-468c-92a1-54fdb7ea764f","type":"DataRange1d"}},"id":"012c4b4b-0729-41e0-865e-6093d41f236e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b036b80f-f647-468c-92a1-54fdb7ea764f","type":"DataRange1d"},{"attributes":{},"id":"890e9415-3e97-48f9-b7ff-4c847ded22ff","type":"BasicTicker"},{"attributes":{},"id":"be0a16e4-376a-4c68-bf2f-c1cf23f00394","type":"BasicTickFormatter"}],"root_ids":["012c4b4b-0729-41e0-865e-6093d41f236e"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"19f17890-a8e7-4937-a9ab-91a70b96a91d","elementid":"08c39c73-2c7a-4ee9-9965-02cd977b4ba5","modelid":"012c4b4b-0729-41e0-865e-6093d41f236e"}];
                
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
