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
      };var element = document.getElementById("5a7c89ed-c4c1-4887-9d97-23a2811cbc56");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5a7c89ed-c4c1-4887-9d97-23a2811cbc56' but no matching script tag was found. ")
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
                var docs_json = {"edd0cc74-f94a-4176-a58e-9694f6fbf8b2":{"roots":{"references":[{"attributes":{},"id":"6639e382-f871-4402-bb93-3e7ea52d66f3","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"907f3ead-f091-4247-8c09-758834f5fce3","type":"Title"},{"attributes":{"callback":null},"id":"9f4a8256-8de1-499f-8327-b0f7247c42d5","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"80ed44ef-8232-49e4-89af-ccf0e9b9f40c","type":"Circle"},{"attributes":{},"id":"5bcc7fb2-29ed-419e-a01c-72835e42b937","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b51a1c80-3e91-4748-9f7d-1e9973dd29a3","type":"BasicTickFormatter"},"plot":{"id":"3a68f65c-2ec2-45d5-81a5-c1b15ff46847","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bcc7fb2-29ed-419e-a01c-72835e42b937","type":"BasicTicker"}},"id":"8c04e87f-bcb5-4bf9-b269-eb61dcdb8a4c","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"8410e80b-8085-47ef-b9a6-94247493ac1c","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b74a5dbb-5123-492d-a389-ec695dc8d851","type":"ColumnDataSource"},{"attributes":{"callback":null,"plot":{"id":"3a68f65c-2ec2-45d5-81a5-c1b15ff46847","subtype":"Figure","type":"Plot"}},"id":"f6e43340-a0da-455b-b3dd-671da2efe0e3","type":"TapTool"},{"attributes":{},"id":"199c1ffe-9559-461d-ab49-cffe8ae49e12","type":"BasicTickFormatter"},{"attributes":{},"id":"b2dbe5c1-604e-4588-832b-ac0464005407","type":"BasicTicker"},{"attributes":{"plot":{"id":"3a68f65c-2ec2-45d5-81a5-c1b15ff46847","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bcc7fb2-29ed-419e-a01c-72835e42b937","type":"BasicTicker"}},"id":"6e6efb18-2973-4249-ad80-f63bf6945e83","type":"Grid"},{"attributes":{},"id":"b51a1c80-3e91-4748-9f7d-1e9973dd29a3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"199c1ffe-9559-461d-ab49-cffe8ae49e12","type":"BasicTickFormatter"},"plot":{"id":"3a68f65c-2ec2-45d5-81a5-c1b15ff46847","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2dbe5c1-604e-4588-832b-ac0464005407","type":"BasicTicker"}},"id":"fb50fddf-ec5d-4e3d-a646-ec994178c53c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f6e43340-a0da-455b-b3dd-671da2efe0e3","type":"TapTool"}]},"id":"73e5d4f1-eb5d-41b8-8855-66095391de7a","type":"Toolbar"},{"attributes":{"below":[{"id":"8c04e87f-bcb5-4bf9-b269-eb61dcdb8a4c","type":"LinearAxis"}],"left":[{"id":"fb50fddf-ec5d-4e3d-a646-ec994178c53c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8c04e87f-bcb5-4bf9-b269-eb61dcdb8a4c","type":"LinearAxis"},{"id":"6e6efb18-2973-4249-ad80-f63bf6945e83","type":"Grid"},{"id":"fb50fddf-ec5d-4e3d-a646-ec994178c53c","type":"LinearAxis"},{"id":"5b04634f-ec80-4e91-8dfa-f4d0e6aa7a00","type":"Grid"},{"id":"440e752c-5170-4413-8d95-110e34ae093a","type":"GlyphRenderer"}],"title":{"id":"907f3ead-f091-4247-8c09-758834f5fce3","type":"Title"},"tool_events":{"id":"6639e382-f871-4402-bb93-3e7ea52d66f3","type":"ToolEvents"},"toolbar":{"id":"73e5d4f1-eb5d-41b8-8855-66095391de7a","type":"Toolbar"},"x_range":{"id":"9f4a8256-8de1-499f-8327-b0f7247c42d5","type":"DataRange1d"},"y_range":{"id":"923b89ce-88e2-45d4-9098-69697bf7d18e","type":"DataRange1d"}},"id":"3a68f65c-2ec2-45d5-81a5-c1b15ff46847","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"923b89ce-88e2-45d4-9098-69697bf7d18e","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"7deb1117-8205-414e-b9c4-54f987eee1fa","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"3a68f65c-2ec2-45d5-81a5-c1b15ff46847","subtype":"Figure","type":"Plot"},"ticker":{"id":"b2dbe5c1-604e-4588-832b-ac0464005407","type":"BasicTicker"}},"id":"5b04634f-ec80-4e91-8dfa-f4d0e6aa7a00","type":"Grid"},{"attributes":{"data_source":{"id":"b74a5dbb-5123-492d-a389-ec695dc8d851","type":"ColumnDataSource"},"glyph":{"id":"7deb1117-8205-414e-b9c4-54f987eee1fa","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"80ed44ef-8232-49e4-89af-ccf0e9b9f40c","type":"Circle"},"selection_glyph":{"id":"8410e80b-8085-47ef-b9a6-94247493ac1c","type":"Circle"}},"id":"440e752c-5170-4413-8d95-110e34ae093a","type":"GlyphRenderer"}],"root_ids":["3a68f65c-2ec2-45d5-81a5-c1b15ff46847"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"edd0cc74-f94a-4176-a58e-9694f6fbf8b2","elementid":"5a7c89ed-c4c1-4887-9d97-23a2811cbc56","modelid":"3a68f65c-2ec2-45d5-81a5-c1b15ff46847"}];
                
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
