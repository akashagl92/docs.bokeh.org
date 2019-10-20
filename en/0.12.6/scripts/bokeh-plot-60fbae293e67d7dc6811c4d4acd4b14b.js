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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("25ca930d-32c0-47ee-b63f-57c3aad735f3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '25ca930d-32c0-47ee-b63f-57c3aad735f3' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"1ed9b4f2-32d3-4b33-8c97-6c962b6f2ef3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5b3dec1b-6e0f-4aa8-8ed9-9ab6d5c64069","type":"PanTool"},{"id":"94453964-8352-488d-81cb-f68b3adb9d2c","type":"WheelZoomTool"},{"id":"10055d64-1980-475f-b61c-113b978e5689","type":"BoxZoomTool"},{"id":"2e906b2c-d520-4ebf-b317-076a47101c43","type":"SaveTool"},{"id":"8d12ea3e-66f6-4622-9a38-84bc031f696b","type":"ResetTool"},{"id":"15a65f00-e050-4086-8421-215767fc2f03","type":"HelpTool"}]},"id":"189c965f-44b1-46d3-81f1-63d9800e9410","type":"Toolbar"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5393aed-7972-460f-9f9a-d2d0c894e4b0","type":"BasicTicker"}},"id":"bd5486fb-fc02-4b4a-a358-50bf2e603edc","type":"Grid"},{"attributes":{"data_source":{"id":"abb88e11-e2bf-4523-9f7a-fdcc4bbd65b2","type":"ColumnDataSource"},"glyph":{"id":"9e36ffd0-bb27-4bb3-b675-7f8883ac67ea","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5ee7022d-7b6b-4ff7-9b64-6d725f6f309c","type":"Patches"},"selection_glyph":null},"id":"b702e7f1-3cb5-4fae-8578-9423b2e38acc","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"36183a69-1da9-4912-bfcc-181f3451b870","type":"LinearAxis"}],"left":[{"id":"570e5dae-5311-454a-a321-dfdc91022f0c","type":"LinearAxis"}],"renderers":[{"id":"36183a69-1da9-4912-bfcc-181f3451b870","type":"LinearAxis"},{"id":"bd5486fb-fc02-4b4a-a358-50bf2e603edc","type":"Grid"},{"id":"570e5dae-5311-454a-a321-dfdc91022f0c","type":"LinearAxis"},{"id":"52641205-1040-46ed-8312-f8f4682c112f","type":"Grid"},{"id":"f0b569f2-ea10-4afb-8371-ef95c4743c59","type":"BoxAnnotation"},{"id":"b702e7f1-3cb5-4fae-8578-9423b2e38acc","type":"GlyphRenderer"}],"title":{"id":"82e6a705-f202-4cdb-a34a-9229c41ba982","type":"Title"},"tool_events":{"id":"b4c6dd71-2c86-454d-a704-31c4cd3ab006","type":"ToolEvents"},"toolbar":{"id":"189c965f-44b1-46d3-81f1-63d9800e9410","type":"Toolbar"},"x_range":{"id":"0febe4ca-b675-4a56-8a82-64c0f18861a5","type":"Range1d"},"x_scale":{"id":"6e04f7db-6a84-450a-b80a-454bd5f8ff30","type":"LinearScale"},"y_range":{"id":"edf1a252-6a9c-4e82-a950-14cbdf955eb6","type":"Range1d"},"y_scale":{"id":"1153fb9e-82a4-4b3b-9ea6-41375fd324d5","type":"LinearScale"}},"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"82e6a705-f202-4cdb-a34a-9229c41ba982","type":"Title"},{"attributes":{},"id":"b4c6dd71-2c86-454d-a704-31c4cd3ab006","type":"ToolEvents"},{"attributes":{"overlay":{"id":"f0b569f2-ea10-4afb-8371-ef95c4743c59","type":"BoxAnnotation"},"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"}},"id":"10055d64-1980-475f-b61c-113b978e5689","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"}},"id":"2e906b2c-d520-4ebf-b317-076a47101c43","type":"SaveTool"},{"attributes":{"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"}},"id":"5b3dec1b-6e0f-4aa8-8ed9-9ab6d5c64069","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"5ee7022d-7b6b-4ff7-9b64-6d725f6f309c","type":"Patches"},{"attributes":{},"id":"6e04f7db-6a84-450a-b80a-454bd5f8ff30","type":"LinearScale"},{"attributes":{},"id":"627d93ad-657e-4a7e-9260-d7d4b8abef41","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["ys","xs","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhAAAAAAADAVUAAAAAAAABNQAAAAAAAgExAAAAAAACAR0AAAAAAAAA8QAAAAAAAAFJAAAAAAAAAVkAAAAAAAABPQAAAAAAAAEhAAAAAAAAAPEAAAAAAAEBRQAAAAAAAwFdAAAAAAAAAOEAAAAAAAAAuQAAAAAAAAEdAAAAAAAAANEAAAAAAAABDQAAAAAAAADBAAAAAAAAAM0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAM0AAAAAAAAAwQAAAAAAAAENAAAAAAAAANEAAAAAAAABHQAAAAAAAAC5AAAAAAAAAOEAAAAAAAMBXQAAAAAAAQFFAAAAAAAAAPEAAAAAAAABIQAAAAAAAAE9AAAAAAAAAVkAAAAAAAABSQAAAAAAAADxAAAAAAACAR0AAAAAAAIBMQAAAAAAAAE1AAAAAAADAVUAAAAAAAABYQAAAAAAAAFxAAAAAAABAX0AAAAAAAIBTQAAAAAAAwF5AAAAAAAAAXkAAAAAAAIBNQAAAAAAAgF5AAAAAAADAZUAAAAAAAEBdQAAAAAAAwFFAAAAAAABAXUAAAAAAAABhQAAAAAAAYGNAAAAAAADAUkAAAAAAAMBTQAAAAAAAQFhAAAAAAADAUkAAAAAAAMBdQAAAAAAAQFFAAAAAAAAAPkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAPkAAAAAAAEBRQAAAAAAAwF1AAAAAAADAUkAAAAAAAEBYQAAAAAAAwFNAAAAAAADAUkAAAAAAAGBjQAAAAAAAAGFAAAAAAABAXUAAAAAAAMBRQAAAAAAAQF1AAAAAAADAZUAAAAAAAIBeQAAAAAAAgE1AAAAAAAAAXkAAAAAAAMBeQAAAAAAAgFNAAAAAAABAX0AAAAAAAABcQAAAAAAAoGZAAAAAAAAgaEAAAAAAAIBYQAAAAAAAAGdAAAAAAAAgZkAAAAAAAOBhQAAAAAAA4GRAAAAAAACAcEAAAAAAAEBhQAAAAAAAgF5AAAAAAAAgZ0AAAAAAAIBrQAAAAAAAQGpAAAAAAAAAW0AAAAAAAABjQAAAAAAA4GVAAAAAAAAgZEAAAAAAAOBlQAAAAAAAgFtAAAAAAAAASEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAASEAAAAAAAIBbQAAAAAAA4GVAAAAAAAAgZEAAAAAAAOBlQAAAAAAAAGNAAAAAAAAAW0AAAAAAAEBqQAAAAAAAgGtAAAAAAAAgZ0AAAAAAAIBeQAAAAAAAQGFAAAAAAACAcEAAAAAAAOBkQAAAAAAA4GFAAAAAAAAgZkAAAAAAAABnQAAAAAAAgFhAAAAAAAAgaEAAAAAAAKBmQAAAAAAAwG5AAAAAAACQcEAAAAAAAMBmQAAAAAAAgGxAAAAAAAAAcUAAAAAAAGBrQAAAAAAAIGlAAAAAAACgdEAAAAAAAABrQAAAAAAAwGJAAAAAAAAgbUAAAAAAAEBuQAAAAAAA4G5AAAAAAAAgaEAAAAAAAOBlQAAAAAAAQG1AAAAAAADAZUAAAAAAAKBpQAAAAAAAIGJAAAAAAABgYEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgYEAAAAAAACBiQAAAAAAAoGlAAAAAAADAZUAAAAAAAEBtQAAAAAAA4GVAAAAAAAAgaEAAAAAAAOBuQAAAAAAAQG5AAAAAAAAgbUAAAAAAAMBiQAAAAAAAAGtAAAAAAACgdEAAAAAAACBpQAAAAAAAYGtAAAAAAAAAcUAAAAAAAIBsQAAAAAAAwGZAAAAAAACQcEAAAAAAAMBuQAAAAAAAYHJAAAAAAACwdUAAAAAAAABxQAAAAAAAEHJAAAAAAADgdEAAAAAAAGByQAAAAAAAIHFAAAAAAAAAeUAAAAAAAJBzQAAAAAAAgGlAAAAAAABQdEAAAAAAACBwQAAAAAAA8HFAAAAAAAAQcUAAAAAAACBnQAAAAAAAoHBAAAAAAADgZ0AAAAAAAJBxQAAAAAAAgGdAAAAAAACgakA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACgakAAAAAAAIBnQAAAAAAAkHFAAAAAAADgZ0AAAAAAAKBwQAAAAAAAIGdAAAAAAAAQcUAAAAAAAPBxQAAAAAAAIHBAAAAAAABQdEAAAAAAAIBpQAAAAAAAkHNAAAAAAAAAeUAAAAAAACBxQAAAAAAAYHJAAAAAAADgdEAAAAAAABByQAAAAAAAAHFAAAAAAACwdUAAAAAAAGByQAAAAAAAYHNAAAAAAADQekAAAAAAAOBzQAAAAAAAsHZAAAAAAACQeUAAAAAAAMB3QAAAAAAAoHNAAAAAAAAwfEAAAAAAAKB2QAAAAAAAoGtAAAAAAACAeEAAAAAAAEByQAAAAAAAQHVAAAAAAAAAckAAAAAAAJBxQAAAAAAA8HFAAAAAAADAa0AAAAAAAPB2QAAAAAAAgG1AAAAAAAAQcUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAQcUAAAAAAAIBtQAAAAAAA8HZAAAAAAADAa0AAAAAAAPBxQAAAAAAAkHFAAAAAAAAAckAAAAAAAEB1QAAAAAAAQHJAAAAAAACAeEAAAAAAAKBrQAAAAAAAoHZAAAAAAAAwfEAAAAAAAKBzQAAAAAAAwHdAAAAAAACQeUAAAAAAALB2QAAAAAAA4HNAAAAAAADQekAAAAAAAGBzQAAAAAAA0HZAAAAAAABgfEAAAAAAANB5QAAAAAAAYHxAAAAAAACge0AAAAAAAAB9QAAAAAAAYHlAAAAAAAAQfUAAAAAAABB5QAAAAAAAIHBAAAAAAACwekAAAAAAAOByQAAAAAAAEHpAAAAAAABwdUAAAAAAAGB3QAAAAAAAIHZAAAAAAABQcUAAAAAAAMB3QAAAAAAAsHBAAAAAAAAwdEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAwdEAAAAAAALBwQAAAAAAAwHdAAAAAAABQcUAAAAAAACB2QAAAAAAAYHdAAAAAAABwdUAAAAAAABB6QAAAAAAA4HJAAAAAAACwekAAAAAAACBwQAAAAAAAEHlAAAAAAAAQfUAAAAAAAGB5QAAAAAAAAH1AAAAAAACge0AAAAAAAGB8QAAAAAAA0HlAAAAAAABgfEAAAAAAANB2QAAAAAAAMHpAAAAAAAAQfkAAAAAAAHB/QAAAAAAAkIBAAAAAAABwfUAAAAAAAICAQAAAAAAA0H5AAAAAAADAfUAAAAAAANB+QAAAAAAA8HFAAAAAAAAQfEAAAAAAAKB2QAAAAAAAAH1AAAAAAAAgeUAAAAAAAPB8QAAAAAAAEHxAAAAAAAAwckAAAAAAADB9QAAAAAAAYHVAAAAAAAAAekA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAekAAAAAAAGB1QAAAAAAAMH1AAAAAAAAwckAAAAAAABB8QAAAAAAA8HxAAAAAAAAgeUAAAAAAAAB9QAAAAAAAoHZAAAAAAAAQfEAAAAAAAPBxQAAAAAAA0H5AAAAAAADAfUAAAAAAANB+QAAAAAAAgIBAAAAAAABwfUAAAAAAAJCAQAAAAAAAcH9AAAAAAAAQfkAAAAAAADB6QAAAAAAAgHxAAAAAAADgfkAAAAAAAKiBQAAAAAAAAIJAAAAAAACwgEAAAAAAAGCCQAAAAAAAmIBAAAAAAAAIgUAAAAAAAPiAQAAAAAAAkHZAAAAAAACwfUAAAAAAAMB6QAAAAAAAoH1AAAAAAAAQfUAAAAAAAEiAQAAAAAAA0H9AAAAAAACwdUAAAAAAANB/QAAAAAAAgHdAAAAAAACAe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAe0AAAAAAAIB3QAAAAAAA0H9AAAAAAACwdUAAAAAAANB/QAAAAAAASIBAAAAAAAAQfUAAAAAAAKB9QAAAAAAAwHpAAAAAAACwfUAAAAAAAJB2QAAAAAAA+IBAAAAAAAAIgUAAAAAAAJiAQAAAAAAAYIJAAAAAAACwgEAAAAAAAACCQAAAAAAAqIFAAAAAAADgfkAAAAAAAIB8QAAAAAAAAH5AAAAAAABggkAAAAAAAPiCQAAAAAAAyINAAAAAAADAgkAAAAAAAJCDQAAAAAAAoIJAAAAAAADog0AAAAAAAPiCQAAAAAAAQHdAAAAAAACQfkAAAAAAAIB/QAAAAAAA4H5AAAAAAAAYgUAAAAAAAFCDQAAAAAAAwIJAAAAAAAAQeEAAAAAAACCBQAAAAAAAsHpAAAAAAADQgEA=","dtype":"float64","shape":[40]}]}},"id":"abb88e11-e2bf-4523-9f7a-fdcc4bbd65b2","type":"ColumnDataSource"},{"attributes":{},"id":"b5393aed-7972-460f-9f9a-d2d0c894e4b0","type":"BasicTicker"},{"attributes":{},"id":"f0dbd2ec-9e30-4e76-89a6-9f28f393b5f7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"f0dbd2ec-9e30-4e76-89a6-9f28f393b5f7","type":"BasicTickFormatter"},"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5393aed-7972-460f-9f9a-d2d0c894e4b0","type":"BasicTicker"}},"id":"36183a69-1da9-4912-bfcc-181f3451b870","type":"LinearAxis"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5271ad9-c5d4-48f3-bbd5-dc158bdb31ca","type":"BasicTicker"}},"id":"52641205-1040-46ed-8312-f8f4682c112f","type":"Grid"},{"attributes":{},"id":"c5271ad9-c5d4-48f3-bbd5-dc158bdb31ca","type":"BasicTicker"},{"attributes":{"callback":null,"end":19},"id":"0febe4ca-b675-4a56-8a82-64c0f18861a5","type":"Range1d"},{"attributes":{"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"}},"id":"8d12ea3e-66f6-4622-9a38-84bc031f696b","type":"ResetTool"},{"attributes":{"formatter":{"id":"627d93ad-657e-4a7e-9260-d7d4b8abef41","type":"BasicTickFormatter"},"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5271ad9-c5d4-48f3-bbd5-dc158bdb31ca","type":"BasicTicker"}},"id":"570e5dae-5311-454a-a321-dfdc91022f0c","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"9e36ffd0-bb27-4bb3-b675-7f8883ac67ea","type":"Patches"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f0b569f2-ea10-4afb-8371-ef95c4743c59","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"}},"id":"94453964-8352-488d-81cb-f68b3adb9d2c","type":"WheelZoomTool"},{"attributes":{},"id":"1153fb9e-82a4-4b3b-9ea6-41375fd324d5","type":"LinearScale"},{"attributes":{"plot":{"id":"6c98352a-48f7-4cda-9207-0c4dfeef2eab","subtype":"Figure","type":"Plot"}},"id":"15a65f00-e050-4086-8421-215767fc2f03","type":"HelpTool"},{"attributes":{"callback":null,"end":800},"id":"edf1a252-6a9c-4e82-a950-14cbdf955eb6","type":"Range1d"}],"root_ids":["6c98352a-48f7-4cda-9207-0c4dfeef2eab"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"1ed9b4f2-32d3-4b33-8c97-6c962b6f2ef3","elementid":"25ca930d-32c0-47ee-b63f-57c3aad735f3","modelid":"6c98352a-48f7-4cda-9207-0c4dfeef2eab"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
