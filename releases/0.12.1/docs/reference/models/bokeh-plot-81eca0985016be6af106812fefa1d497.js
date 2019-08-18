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
      };var element = document.getElementById("10ea5ec3-d9ba-4ac7-ab17-aee5cb7b48a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '10ea5ec3-d9ba-4ac7-ab17-aee5cb7b48a0' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"8d39a320-ab5e-4eb4-b4b3-af8284e259bf":{"roots":{"references":[{"attributes":{"formatter":{"id":"da694996-fffe-48c6-92be-14b98331bf90","type":"BasicTickFormatter"},"plot":{"id":"042e6a97-63ef-432d-bb0c-41c0f7e0114b","type":"Plot"},"ticker":{"id":"f37e7346-f786-4f80-8d9d-0022919154f9","type":"BasicTicker"}},"id":"89732011-9ec1-450e-a836-5a60c9f72384","type":"LinearAxis"},{"attributes":{"below":[{"id":"f2f602f8-6831-4662-b7ea-faa0d3e04773","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"89732011-9ec1-450e-a836-5a60c9f72384","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2c865911-75e6-45db-869c-781467ff09a5","type":"GlyphRenderer"},{"id":"f2f602f8-6831-4662-b7ea-faa0d3e04773","type":"LinearAxis"},{"id":"89732011-9ec1-450e-a836-5a60c9f72384","type":"LinearAxis"},{"id":"bc3ca9a2-ed4b-4eea-add9-e9e4a8093eab","type":"Grid"},{"id":"cdc631ba-4f63-41da-9461-165d748a7d29","type":"Grid"}],"title":null,"tool_events":{"id":"1e4a4e28-8122-4982-87f1-aa83ae888658","type":"ToolEvents"},"toolbar":{"id":"83fa727f-de76-4e04-8a64-0e2834623351","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5d4f5582-21f7-4723-a296-b0e6e79ea29c","type":"DataRange1d"},"y_range":{"id":"4251c9fd-94d1-4517-8c2a-a51a7fd9e1a8","type":"DataRange1d"}},"id":"042e6a97-63ef-432d-bb0c-41c0f7e0114b","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"042e6a97-63ef-432d-bb0c-41c0f7e0114b","type":"Plot"},"ticker":{"id":"f37e7346-f786-4f80-8d9d-0022919154f9","type":"BasicTicker"}},"id":"cdc631ba-4f63-41da-9461-165d748a7d29","type":"Grid"},{"attributes":{"data_source":{"id":"ed4f6d8f-ade1-4977-a3ac-3a4214b01f38","type":"ColumnDataSource"},"glyph":{"id":"e6dc678a-3680-4cb4-9679-622d42655ec1","type":"Quadratic"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2c865911-75e6-45db-869c-781467ff09a5","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","yp01","xp01","xp02"],"data":{"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"xp01":[-1.9,-1.4,-0.9,-0.4,0.1,0.6,1.1,1.6,2.1],"xp02":[-1.6,-1.1,-0.6,-0.09999999999999998,0.4,0.9,1.4,1.9,2.4],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"yp01":[4.2,2.45,1.2,0.45,0.2,0.45,1.2,2.45,4.2]}},"id":"ed4f6d8f-ade1-4977-a3ac-3a4214b01f38","type":"ColumnDataSource"},{"attributes":{},"id":"12e9ae70-0d9d-417c-a8d2-bed73d417cf5","type":"BasicTicker"},{"attributes":{"plot":{"id":"042e6a97-63ef-432d-bb0c-41c0f7e0114b","type":"Plot"},"ticker":{"id":"12e9ae70-0d9d-417c-a8d2-bed73d417cf5","type":"BasicTicker"}},"id":"bc3ca9a2-ed4b-4eea-add9-e9e4a8093eab","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"83fa727f-de76-4e04-8a64-0e2834623351","type":"Toolbar"},{"attributes":{},"id":"f37e7346-f786-4f80-8d9d-0022919154f9","type":"BasicTicker"},{"attributes":{"cx":{"field":"xp01"},"cy":{"field":"yp01"},"line_color":{"value":"#4DAF4A"},"line_width":{"value":3},"x0":{"field":"x"},"x1":{"field":"xp02"},"y0":{"field":"y"},"y1":{"field":"y"}},"id":"e6dc678a-3680-4cb4-9679-622d42655ec1","type":"Quadratic"},{"attributes":{},"id":"da694996-fffe-48c6-92be-14b98331bf90","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5d4f5582-21f7-4723-a296-b0e6e79ea29c","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4251c9fd-94d1-4517-8c2a-a51a7fd9e1a8","type":"DataRange1d"},{"attributes":{"formatter":{"id":"892cd871-ec35-4bf6-aaff-08a421a8bef8","type":"BasicTickFormatter"},"plot":{"id":"042e6a97-63ef-432d-bb0c-41c0f7e0114b","type":"Plot"},"ticker":{"id":"12e9ae70-0d9d-417c-a8d2-bed73d417cf5","type":"BasicTicker"}},"id":"f2f602f8-6831-4662-b7ea-faa0d3e04773","type":"LinearAxis"},{"attributes":{},"id":"892cd871-ec35-4bf6-aaff-08a421a8bef8","type":"BasicTickFormatter"},{"attributes":{},"id":"1e4a4e28-8122-4982-87f1-aa83ae888658","type":"ToolEvents"}],"root_ids":["042e6a97-63ef-432d-bb0c-41c0f7e0114b"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"8d39a320-ab5e-4eb4-b4b3-af8284e259bf","elementid":"10ea5ec3-d9ba-4ac7-ab17-aee5cb7b48a0","modelid":"042e6a97-63ef-432d-bb0c-41c0f7e0114b"}];
              
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