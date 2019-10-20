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
      };var element = document.getElementById("86c12ae1-58ab-404c-9c94-bb6092424947");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '86c12ae1-58ab-404c-9c94-bb6092424947' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"fb0ab509-fed4-4a3e-895a-2a7c3ccfc857":{"roots":{"references":[{"attributes":{},"id":"0cffe1ad-0663-46d9-a7a4-60082cede583","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"b1aacafb-6473-4e97-b122-8f731d54d849","type":"DataRange1d"},{"attributes":{"below":[{"id":"ff746db4-7f43-458d-ad72-ed8d9f1a8676","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"6d9b013a-a3e4-4db5-8273-fb6fec7c2af2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f541a0b0-e574-40bc-9882-e84861d4961d","type":"GlyphRenderer"},{"id":"ff746db4-7f43-458d-ad72-ed8d9f1a8676","type":"LinearAxis"},{"id":"6d9b013a-a3e4-4db5-8273-fb6fec7c2af2","type":"LinearAxis"},{"id":"06acb078-5712-4f2f-9198-abaa9eed3cee","type":"Grid"},{"id":"71f52795-d751-4986-bd53-652ca187a1b4","type":"Grid"}],"title":null,"tool_events":{"id":"8cb7c433-e63c-44df-9ae5-0074f3b0179e","type":"ToolEvents"},"toolbar":{"id":"2fa07ece-6f37-4a6c-9671-294ee1914429","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b1aacafb-6473-4e97-b122-8f731d54d849","type":"DataRange1d"},"y_range":{"id":"97dc12ef-8376-4ea0-a4e4-6d3226592797","type":"DataRange1d"}},"id":"102323cf-04e6-47ad-8337-29ca12a8d00f","type":"Plot"},{"attributes":{"plot":{"id":"102323cf-04e6-47ad-8337-29ca12a8d00f","type":"Plot"},"ticker":{"id":"b12ecb61-3963-43fc-b1d6-fe4fbe679b16","type":"BasicTicker"}},"id":"06acb078-5712-4f2f-9198-abaa9eed3cee","type":"Grid"},{"attributes":{},"id":"8cb7c433-e63c-44df-9ae5-0074f3b0179e","type":"ToolEvents"},{"attributes":{},"id":"dbd4d61a-5ffe-4c4b-9d57-8a5f3d79eed4","type":"BasicTickFormatter"},{"attributes":{},"id":"b402fed8-7d03-4e63-a8f3-8f5c57474360","type":"BasicTicker"},{"attributes":{"formatter":{"id":"0cffe1ad-0663-46d9-a7a4-60082cede583","type":"BasicTickFormatter"},"plot":{"id":"102323cf-04e6-47ad-8337-29ca12a8d00f","type":"Plot"},"ticker":{"id":"b402fed8-7d03-4e63-a8f3-8f5c57474360","type":"BasicTicker"}},"id":"6d9b013a-a3e4-4db5-8273-fb6fec7c2af2","type":"LinearAxis"},{"attributes":{},"id":"b12ecb61-3963-43fc-b1d6-fe4fbe679b16","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"102323cf-04e6-47ad-8337-29ca12a8d00f","type":"Plot"},"ticker":{"id":"b402fed8-7d03-4e63-a8f3-8f5c57474360","type":"BasicTicker"}},"id":"71f52795-d751-4986-bd53-652ca187a1b4","type":"Grid"},{"attributes":{"data_source":{"id":"9dfec2c6-f409-4be5-a576-cf4578924663","type":"ColumnDataSource"},"glyph":{"id":"39568f87-1614-496c-af61-75589e9e97df","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f541a0b0-e574-40bc-9882-e84861d4961d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"9dfec2c6-f409-4be5-a576-cf4578924663","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#7fc97f"},"inner_radius":{"units":"data","value":0.2},"outer_radius":{"units":"data","value":0.4},"x":{"field":"x"},"y":{"field":"y"}},"id":"39568f87-1614-496c-af61-75589e9e97df","type":"Annulus"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2fa07ece-6f37-4a6c-9671-294ee1914429","type":"Toolbar"},{"attributes":{"formatter":{"id":"dbd4d61a-5ffe-4c4b-9d57-8a5f3d79eed4","type":"BasicTickFormatter"},"plot":{"id":"102323cf-04e6-47ad-8337-29ca12a8d00f","type":"Plot"},"ticker":{"id":"b12ecb61-3963-43fc-b1d6-fe4fbe679b16","type":"BasicTicker"}},"id":"ff746db4-7f43-458d-ad72-ed8d9f1a8676","type":"LinearAxis"},{"attributes":{"callback":null},"id":"97dc12ef-8376-4ea0-a4e4-6d3226592797","type":"DataRange1d"}],"root_ids":["102323cf-04e6-47ad-8337-29ca12a8d00f"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"fb0ab509-fed4-4a3e-895a-2a7c3ccfc857","elementid":"86c12ae1-58ab-404c-9c94-bb6092424947","modelid":"102323cf-04e6-47ad-8337-29ca12a8d00f"}];
              
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