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
      };var element = document.getElementById("af5b7336-47d9-4dee-bf02-8d8b37241bc3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'af5b7336-47d9-4dee-bf02-8d8b37241bc3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"3b1fae2a-a87e-46eb-9139-35d3fc32e986":{"roots":{"references":[{"attributes":{"plot":{"id":"e24841f8-56cd-4bc9-bd64-b78ac6c49597","type":"Plot"},"ticker":{"id":"dc72912e-7dd0-4084-adc1-30497064a73e","type":"BasicTicker"}},"id":"eeeda629-e1e6-4c5c-999d-68c26c525e20","type":"Grid"},{"attributes":{},"id":"e4713e2b-58bc-44af-ad47-a220268a561d","type":"ToolEvents"},{"attributes":{},"id":"77dc46bb-8b34-4c69-b3c2-408f9cf2ca3a","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a99f96e8-707f-473b-96df-e67425bc0757","type":"Square"},{"attributes":{"below":[{"id":"2084ed6e-a3ad-40d8-98db-043a7d7a3f2f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1b9ff39b-abf3-407b-93ca-2b96d1a6f2ab","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fc373167-4eef-4f08-9b37-f0903d4fa3d9","type":"GlyphRenderer"},{"id":"2084ed6e-a3ad-40d8-98db-043a7d7a3f2f","type":"LinearAxis"},{"id":"1b9ff39b-abf3-407b-93ca-2b96d1a6f2ab","type":"LinearAxis"},{"id":"eeeda629-e1e6-4c5c-999d-68c26c525e20","type":"Grid"},{"id":"4d76f625-eda8-4923-95ae-bebcac37683c","type":"Grid"}],"title":null,"tool_events":{"id":"e4713e2b-58bc-44af-ad47-a220268a561d","type":"ToolEvents"},"toolbar":{"id":"e2a46c90-bdaa-4123-97c3-dcecefe6be01","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8ebafe60-1721-49ef-bc19-f2a0137b96fe","type":"DataRange1d"},"y_range":{"id":"9341f5db-69a3-4e2f-a319-68c6fb5892d9","type":"DataRange1d"}},"id":"e24841f8-56cd-4bc9-bd64-b78ac6c49597","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e2a46c90-bdaa-4123-97c3-dcecefe6be01","type":"Toolbar"},{"attributes":{},"id":"dc72912e-7dd0-4084-adc1-30497064a73e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e24841f8-56cd-4bc9-bd64-b78ac6c49597","type":"Plot"},"ticker":{"id":"77dc46bb-8b34-4c69-b3c2-408f9cf2ca3a","type":"BasicTicker"}},"id":"4d76f625-eda8-4923-95ae-bebcac37683c","type":"Grid"},{"attributes":{"data_source":{"id":"8d1482a7-e3b5-439d-8c6b-4d7acb0c1ba8","type":"ColumnDataSource"},"glyph":{"id":"a99f96e8-707f-473b-96df-e67425bc0757","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fc373167-4eef-4f08-9b37-f0903d4fa3d9","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"0eef84e7-b639-4566-8451-f698f2bba1ab","type":"BasicTickFormatter"},"plot":{"id":"e24841f8-56cd-4bc9-bd64-b78ac6c49597","type":"Plot"},"ticker":{"id":"77dc46bb-8b34-4c69-b3c2-408f9cf2ca3a","type":"BasicTicker"}},"id":"1b9ff39b-abf3-407b-93ca-2b96d1a6f2ab","type":"LinearAxis"},{"attributes":{},"id":"0eef84e7-b639-4566-8451-f698f2bba1ab","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"3d5cde1b-c10a-4541-82c0-08f32236480e","type":"BasicTickFormatter"},"plot":{"id":"e24841f8-56cd-4bc9-bd64-b78ac6c49597","type":"Plot"},"ticker":{"id":"dc72912e-7dd0-4084-adc1-30497064a73e","type":"BasicTicker"}},"id":"2084ed6e-a3ad-40d8-98db-043a7d7a3f2f","type":"LinearAxis"},{"attributes":{},"id":"3d5cde1b-c10a-4541-82c0-08f32236480e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"8d1482a7-e3b5-439d-8c6b-4d7acb0c1ba8","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9341f5db-69a3-4e2f-a319-68c6fb5892d9","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8ebafe60-1721-49ef-bc19-f2a0137b96fe","type":"DataRange1d"}],"root_ids":["e24841f8-56cd-4bc9-bd64-b78ac6c49597"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"3b1fae2a-a87e-46eb-9139-35d3fc32e986","elementid":"af5b7336-47d9-4dee-bf02-8d8b37241bc3","modelid":"e24841f8-56cd-4bc9-bd64-b78ac6c49597"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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