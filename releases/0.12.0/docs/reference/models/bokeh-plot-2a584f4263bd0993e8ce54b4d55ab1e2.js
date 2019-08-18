document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("ba475f65-cb2c-4fce-94e5-d933968ddf72");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba475f65-cb2c-4fce-94e5-d933968ddf72' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"c4f2eb5e-c46d-45b6-b1c5-c42ef111e70b":{"roots":{"references":[{"attributes":{"data_source":{"id":"ab0bc5ee-3e42-4516-8c56-0fa1f131a54f","type":"ColumnDataSource"},"glyph":{"id":"2e1c7430-dd9f-4cad-93ff-7162540e6b7d","type":"Quad"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8dc76b6-38a5-4c0e-a93a-79c035f7b12e","type":"GlyphRenderer"},{"attributes":{},"id":"0426575c-1756-473b-b233-b9c9a992a412","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["top","right","bottom","left"],"data":{"bottom":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1],"left":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"right":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"ab0bc5ee-3e42-4516-8c56-0fa1f131a54f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"e7b76fa1-8c62-4c3a-b18c-b79455bc59b0","type":"DataRange1d"},{"attributes":{},"id":"483859aa-8d2a-41ae-9300-4fd26e36f617","type":"BasicTicker"},{"attributes":{},"id":"bf57168c-2131-4884-82bf-f8043cfb1f44","type":"BasicTickFormatter"},{"attributes":{},"id":"10e2af0d-87fc-4d8f-b12e-14bc16b5726d","type":"ToolEvents"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"2e1c7430-dd9f-4cad-93ff-7162540e6b7d","type":"Quad"},{"attributes":{},"id":"f498f43e-d1e6-4e09-bbb6-76daebd286d8","type":"BasicTicker"},{"attributes":{"plot":{"id":"cd2dd90f-d415-4c98-b2b0-12b4b912cb2a","type":"Plot"},"ticker":{"id":"f498f43e-d1e6-4e09-bbb6-76daebd286d8","type":"BasicTicker"}},"id":"c8dadf6c-c608-448d-acea-4749a7244e5c","type":"Grid"},{"attributes":{"formatter":{"id":"0426575c-1756-473b-b233-b9c9a992a412","type":"BasicTickFormatter"},"plot":{"id":"cd2dd90f-d415-4c98-b2b0-12b4b912cb2a","type":"Plot"},"ticker":{"id":"f498f43e-d1e6-4e09-bbb6-76daebd286d8","type":"BasicTicker"}},"id":"0e18100c-13fd-4e86-8cf3-28cce42afdad","type":"LinearAxis"},{"attributes":{"below":[{"id":"0e18100c-13fd-4e86-8cf3-28cce42afdad","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"daa6eeaa-4119-4f7f-b9c9-814a115c4206","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b8dc76b6-38a5-4c0e-a93a-79c035f7b12e","type":"GlyphRenderer"},{"id":"0e18100c-13fd-4e86-8cf3-28cce42afdad","type":"LinearAxis"},{"id":"daa6eeaa-4119-4f7f-b9c9-814a115c4206","type":"LinearAxis"},{"id":"c8dadf6c-c608-448d-acea-4749a7244e5c","type":"Grid"},{"id":"ff694892-49fc-4792-aec1-d54fa95ab3b1","type":"Grid"}],"title":null,"tool_events":{"id":"10e2af0d-87fc-4d8f-b12e-14bc16b5726d","type":"ToolEvents"},"toolbar":{"id":"f4a00c0a-b5ae-425d-96e7-0b9fbeea8588","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74a2054d-34a6-406c-aeeb-303d158f5186","type":"DataRange1d"},"y_range":{"id":"e7b76fa1-8c62-4c3a-b18c-b79455bc59b0","type":"DataRange1d"}},"id":"cd2dd90f-d415-4c98-b2b0-12b4b912cb2a","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f4a00c0a-b5ae-425d-96e7-0b9fbeea8588","type":"Toolbar"},{"attributes":{"callback":null},"id":"74a2054d-34a6-406c-aeeb-303d158f5186","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"cd2dd90f-d415-4c98-b2b0-12b4b912cb2a","type":"Plot"},"ticker":{"id":"483859aa-8d2a-41ae-9300-4fd26e36f617","type":"BasicTicker"}},"id":"ff694892-49fc-4792-aec1-d54fa95ab3b1","type":"Grid"},{"attributes":{"formatter":{"id":"bf57168c-2131-4884-82bf-f8043cfb1f44","type":"BasicTickFormatter"},"plot":{"id":"cd2dd90f-d415-4c98-b2b0-12b4b912cb2a","type":"Plot"},"ticker":{"id":"483859aa-8d2a-41ae-9300-4fd26e36f617","type":"BasicTicker"}},"id":"daa6eeaa-4119-4f7f-b9c9-814a115c4206","type":"LinearAxis"}],"root_ids":["cd2dd90f-d415-4c98-b2b0-12b4b912cb2a"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"c4f2eb5e-c46d-45b6-b1c5-c42ef111e70b","elementid":"ba475f65-cb2c-4fce-94e5-d933968ddf72","modelid":"cd2dd90f-d415-4c98-b2b0-12b4b912cb2a"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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