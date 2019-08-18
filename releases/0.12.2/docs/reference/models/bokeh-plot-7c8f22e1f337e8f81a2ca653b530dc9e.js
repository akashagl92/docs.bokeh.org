document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("400f210c-e81d-400a-80b7-a4e160b1f4c5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '400f210c-e81d-400a-80b7-a4e160b1f4c5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"fdad359c-15e6-42f8-9352-f1296b296f2f":{"roots":{"references":[{"attributes":{},"id":"3a0f1899-0e52-4fe4-9a06-ae489b5f90be","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"da980030-e6c9-4b2d-8682-6871e65a35f6","type":"Plot"},"ticker":{"id":"a9523109-7252-421b-bab9-338c2e22cd48","type":"BasicTicker"}},"id":"4ed62220-cd3c-479d-a75f-a9a42fe067eb","type":"Grid"},{"attributes":{"callback":null},"id":"57c8800d-09f0-437d-8605-9ac76f5c1986","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-2.0},"length":{"field":"l","units":"data"},"line_color":{"value":"#fb8072"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ae680e25-3f62-407b-af73-d4e905a445d2","type":"Ray"},{"attributes":{"formatter":{"id":"1519b888-66e8-4258-b92a-dd154cc101b5","type":"BasicTickFormatter"},"plot":{"id":"da980030-e6c9-4b2d-8682-6871e65a35f6","type":"Plot"},"ticker":{"id":"3a0f1899-0e52-4fe4-9a06-ae489b5f90be","type":"BasicTicker"}},"id":"67063a72-732f-4edc-8652-294bf7fc0f52","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"ac5a54f8-8758-40b5-a52c-fed6c8e8a76c","type":"Toolbar"},{"attributes":{},"id":"1519b888-66e8-4258-b92a-dd154cc101b5","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5866c112-b4f2-4ac8-933d-9f20cf84f8a1","type":"ColumnDataSource"},"glyph":{"id":"ae680e25-3f62-407b-af73-d4e905a445d2","type":"Ray"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fbb37294-2972-4c5a-b8da-1a2c542a4537","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"67063a72-732f-4edc-8652-294bf7fc0f52","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ede44cfe-5f14-436d-8152-6e1ad980cead","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fbb37294-2972-4c5a-b8da-1a2c542a4537","type":"GlyphRenderer"},{"id":"67063a72-732f-4edc-8652-294bf7fc0f52","type":"LinearAxis"},{"id":"ede44cfe-5f14-436d-8152-6e1ad980cead","type":"LinearAxis"},{"id":"e8b30a78-b4fc-4813-b673-d946dd720afe","type":"Grid"},{"id":"4ed62220-cd3c-479d-a75f-a9a42fe067eb","type":"Grid"}],"title":null,"tool_events":{"id":"269a89c7-76bc-4ec8-82e5-e5d80f002f4b","type":"ToolEvents"},"toolbar":{"id":"ac5a54f8-8758-40b5-a52c-fed6c8e8a76c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"57c8800d-09f0-437d-8605-9ac76f5c1986","type":"DataRange1d"},"y_range":{"id":"5bb2fa99-3bda-4f8a-af0c-db1af1d0f086","type":"DataRange1d"}},"id":"da980030-e6c9-4b2d-8682-6871e65a35f6","type":"Plot"},{"attributes":{},"id":"a9523109-7252-421b-bab9-338c2e22cd48","type":"BasicTicker"},{"attributes":{},"id":"217185ca-e3d4-4cda-bee4-295214e60129","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"da980030-e6c9-4b2d-8682-6871e65a35f6","type":"Plot"},"ticker":{"id":"3a0f1899-0e52-4fe4-9a06-ae489b5f90be","type":"BasicTicker"}},"id":"e8b30a78-b4fc-4813-b673-d946dd720afe","type":"Grid"},{"attributes":{"callback":null},"id":"5bb2fa99-3bda-4f8a-af0c-db1af1d0f086","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","l"],"data":{"l":[15.0,17.5,20.0,22.5,25.0,27.5,30.0,32.5,35.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"5866c112-b4f2-4ac8-933d-9f20cf84f8a1","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"217185ca-e3d4-4cda-bee4-295214e60129","type":"BasicTickFormatter"},"plot":{"id":"da980030-e6c9-4b2d-8682-6871e65a35f6","type":"Plot"},"ticker":{"id":"a9523109-7252-421b-bab9-338c2e22cd48","type":"BasicTicker"}},"id":"ede44cfe-5f14-436d-8152-6e1ad980cead","type":"LinearAxis"},{"attributes":{},"id":"269a89c7-76bc-4ec8-82e5-e5d80f002f4b","type":"ToolEvents"}],"root_ids":["da980030-e6c9-4b2d-8682-6871e65a35f6"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"fdad359c-15e6-42f8-9352-f1296b296f2f","elementid":"400f210c-e81d-400a-80b7-a4e160b1f4c5","modelid":"da980030-e6c9-4b2d-8682-6871e65a35f6"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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
});