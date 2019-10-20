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
      };var element = document.getElementById("43510a2a-1a9f-46bc-a0f5-1f09792cd08e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '43510a2a-1a9f-46bc-a0f5-1f09792cd08e' but no matching script tag was found. ")
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
                var docs_json = {"21457ffd-8160-4d61-872d-7c51fb5029c6":{"roots":{"references":[{"attributes":{},"id":"6a149c05-60ef-4d68-b69a-19ce07c2e56f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b7c479f3-7d5f-4d00-98af-235aa56fd1c0","type":"Plot"},"ticker":{"id":"55bdfa0a-97fb-4fd9-b016-0ffc30bbcaf0","type":"BasicTicker"}},"id":"062bfa45-aceb-453c-b4ef-7330253146e6","type":"Grid"},{"attributes":{"data_source":{"id":"0964eab4-604d-4f22-b528-f5552b5c4fe5","type":"ColumnDataSource"},"glyph":{"id":"b7f7808b-4e15-4247-b700-691f5613ac27","type":"HBar"},"hover_glyph":null,"muted_glyph":null},"id":"11e5ed3e-dd16-4fb2-b724-bdbd84fd2eca","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"d069788f-68d0-411c-945b-b71e22251b07","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1a579207-318e-47e3-8c82-cb43e695bb6b","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"11e5ed3e-dd16-4fb2-b724-bdbd84fd2eca","type":"GlyphRenderer"},{"id":"d069788f-68d0-411c-945b-b71e22251b07","type":"LinearAxis"},{"id":"1a579207-318e-47e3-8c82-cb43e695bb6b","type":"LinearAxis"},{"id":"062bfa45-aceb-453c-b4ef-7330253146e6","type":"Grid"},{"id":"6500e5ab-f70b-4b29-a336-12bdf04b2ddb","type":"Grid"}],"title":null,"tool_events":{"id":"30608623-1c20-4dbc-b382-d5846c423d09","type":"ToolEvents"},"toolbar":{"id":"f0669a87-b05e-40fe-8997-c0a27cf4de9b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1343a4df-fa0d-4556-bb1e-4559a8b04ed8","type":"DataRange1d"},"y_range":{"id":"4c4c8a2a-ca52-44a6-976a-c00813fb972e","type":"DataRange1d"}},"id":"b7c479f3-7d5f-4d00-98af-235aa56fd1c0","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"b7c479f3-7d5f-4d00-98af-235aa56fd1c0","type":"Plot"},"ticker":{"id":"d425cddb-515d-4995-98ad-34767103ecb0","type":"BasicTicker"}},"id":"6500e5ab-f70b-4b29-a336-12bdf04b2ddb","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f0669a87-b05e-40fe-8997-c0a27cf4de9b","type":"Toolbar"},{"attributes":{},"id":"55bdfa0a-97fb-4fd9-b016-0ffc30bbcaf0","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"b7f7808b-4e15-4247-b700-691f5613ac27","type":"HBar"},{"attributes":{"callback":null},"id":"4c4c8a2a-ca52-44a6-976a-c00813fb972e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"18e5890f-9fc5-4524-8e3d-f2132f61b003","type":"BasicTickFormatter"},"plot":{"id":"b7c479f3-7d5f-4d00-98af-235aa56fd1c0","type":"Plot"},"ticker":{"id":"55bdfa0a-97fb-4fd9-b016-0ffc30bbcaf0","type":"BasicTicker"}},"id":"d069788f-68d0-411c-945b-b71e22251b07","type":"LinearAxis"},{"attributes":{},"id":"d425cddb-515d-4995-98ad-34767103ecb0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["right","y"],"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"0964eab4-604d-4f22-b528-f5552b5c4fe5","type":"ColumnDataSource"},{"attributes":{},"id":"30608623-1c20-4dbc-b382-d5846c423d09","type":"ToolEvents"},{"attributes":{},"id":"18e5890f-9fc5-4524-8e3d-f2132f61b003","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1343a4df-fa0d-4556-bb1e-4559a8b04ed8","type":"DataRange1d"},{"attributes":{"formatter":{"id":"6a149c05-60ef-4d68-b69a-19ce07c2e56f","type":"BasicTickFormatter"},"plot":{"id":"b7c479f3-7d5f-4d00-98af-235aa56fd1c0","type":"Plot"},"ticker":{"id":"d425cddb-515d-4995-98ad-34767103ecb0","type":"BasicTicker"}},"id":"1a579207-318e-47e3-8c82-cb43e695bb6b","type":"LinearAxis"}],"root_ids":["b7c479f3-7d5f-4d00-98af-235aa56fd1c0"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"21457ffd-8160-4d61-872d-7c51fb5029c6","elementid":"43510a2a-1a9f-46bc-a0f5-1f09792cd08e","modelid":"b7c479f3-7d5f-4d00-98af-235aa56fd1c0"}];
                
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
