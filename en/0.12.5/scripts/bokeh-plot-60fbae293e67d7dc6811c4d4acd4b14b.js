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
      };var element = document.getElementById("994d6eb2-6784-4c06-b801-76f738d2b81e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '994d6eb2-6784-4c06-b801-76f738d2b81e' but no matching script tag was found. ")
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
                var docs_json = {"2e984916-160d-46d2-85cd-25ec3e1eafb6":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"f118e1d5-f8f3-411e-b3ae-c7cb232fa7c3","type":"Title"},{"attributes":{},"id":"4daebea7-6a7a-4b5d-a163-f88dab1350ee","type":"BasicTickFormatter"},{"attributes":{},"id":"66aeada7-7b21-4259-aa7d-131b2a626f3a","type":"BasicTicker"},{"attributes":{},"id":"575ef526-9d3f-40b1-b6e9-d004b0cfebcb","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"6b6b7633-06e1-433c-8098-19bd4f7bed5a","type":"Patches"},{"attributes":{},"id":"79d88917-9d9e-4bd3-ac28-752bfc8ea360","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4eaaf16d-8dca-4988-a239-328e727b5d8c","type":"ColumnDataSource"},"glyph":{"id":"6b6b7633-06e1-433c-8098-19bd4f7bed5a","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5f52857b-86a7-4051-8ed6-cd4d82cd6f0f","type":"Patches"},"selection_glyph":null},"id":"1f410548-d18b-4186-a556-6aa935101146","type":"GlyphRenderer"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"},"ticker":{"id":"66aeada7-7b21-4259-aa7d-131b2a626f3a","type":"BasicTicker"}},"id":"6ca847d8-8748-46fe-b317-df253f6b5106","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"73d53b59-7a99-4aac-a035-b81325ab3c21","type":"PanTool"},{"id":"e514e768-2d78-4172-b81a-ca2a81dc185c","type":"WheelZoomTool"},{"id":"12139ab6-912f-4d44-9a71-b250e0a8fd79","type":"BoxZoomTool"},{"id":"a281eace-2920-4993-8409-4ab278891966","type":"SaveTool"},{"id":"8832d096-7b5b-43a0-b9c7-385376a33da8","type":"ResetTool"},{"id":"8226e321-986a-453e-8bc5-8ae5560fd51a","type":"HelpTool"}]},"id":"38694872-41dc-45dd-b5a6-8510233b14ea","type":"Toolbar"},{"attributes":{"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"}},"id":"73d53b59-7a99-4aac-a035-b81325ab3c21","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3e435c0c-663e-492c-a7ed-f5afbcb587ad","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"4daebea7-6a7a-4b5d-a163-f88dab1350ee","type":"BasicTickFormatter"},"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"},"ticker":{"id":"575ef526-9d3f-40b1-b6e9-d004b0cfebcb","type":"BasicTicker"}},"id":"37910972-d305-4101-8351-f6be1909947e","type":"LinearAxis"},{"attributes":{"overlay":{"id":"3e435c0c-663e-492c-a7ed-f5afbcb587ad","type":"BoxAnnotation"},"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"}},"id":"12139ab6-912f-4d44-9a71-b250e0a8fd79","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"fddc3124-ce11-44d2-998b-75e9cd53782b","type":"LinearAxis"}],"left":[{"id":"37910972-d305-4101-8351-f6be1909947e","type":"LinearAxis"}],"renderers":[{"id":"fddc3124-ce11-44d2-998b-75e9cd53782b","type":"LinearAxis"},{"id":"6ca847d8-8748-46fe-b317-df253f6b5106","type":"Grid"},{"id":"37910972-d305-4101-8351-f6be1909947e","type":"LinearAxis"},{"id":"d998ae6b-87ec-4b4b-a0d8-685d5281bb7a","type":"Grid"},{"id":"3e435c0c-663e-492c-a7ed-f5afbcb587ad","type":"BoxAnnotation"},{"id":"1f410548-d18b-4186-a556-6aa935101146","type":"GlyphRenderer"}],"title":{"id":"f118e1d5-f8f3-411e-b3ae-c7cb232fa7c3","type":"Title"},"tool_events":{"id":"79d88917-9d9e-4bd3-ac28-752bfc8ea360","type":"ToolEvents"},"toolbar":{"id":"38694872-41dc-45dd-b5a6-8510233b14ea","type":"Toolbar"},"x_range":{"id":"f456c491-deb9-4908-8623-4bb92ca32063","type":"Range1d"},"y_range":{"id":"2f55f341-5058-441e-ae35-3a012fdffc24","type":"Range1d"}},"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"},"ticker":{"id":"575ef526-9d3f-40b1-b6e9-d004b0cfebcb","type":"BasicTicker"}},"id":"d998ae6b-87ec-4b4b-a0d8-685d5281bb7a","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"5f52857b-86a7-4051-8ed6-cd4d82cd6f0f","type":"Patches"},{"attributes":{"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"}},"id":"e514e768-2d78-4172-b81a-ca2a81dc185c","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"4fbb25f0-6e73-417b-bdc6-48347b71ddd2","type":"BasicTickFormatter"},"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"},"ticker":{"id":"66aeada7-7b21-4259-aa7d-131b2a626f3a","type":"BasicTicker"}},"id":"fddc3124-ce11-44d2-998b-75e9cd53782b","type":"LinearAxis"},{"attributes":{},"id":"4fbb25f0-6e73-417b-bdc6-48347b71ddd2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFhAAAAAAAAAPUAAAAAAAABXQAAAAAAAADRAAAAAAAAAUEAAAAAAAIBHQAAAAAAAQFhAAAAAAAAAT0AAAAAAAIBSQAAAAAAAADhAAAAAAACAREAAAAAAAIBNQAAAAAAAADpAAAAAAAAAOkAAAAAAAEBVQAAAAAAAAEtAAAAAAADAV0AAAAAAAAA2QAAAAAAAAEJAAAAAAAAAT0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAT0AAAAAAAABCQAAAAAAAADZAAAAAAADAV0AAAAAAAABLQAAAAAAAQFVAAAAAAAAAOkAAAAAAAAA6QAAAAAAAgE1AAAAAAACAREAAAAAAAAA4QAAAAAAAgFJAAAAAAAAAT0AAAAAAAEBYQAAAAAAAgEdAAAAAAAAAUEAAAAAAAAA0QAAAAAAAAFdAAAAAAAAAPUAAAAAAAMBYQAAAAAAA4GRAAAAAAABAVUAAAAAAAMBaQAAAAAAAAERAAAAAAABAYUAAAAAAACBgQAAAAAAAYGNAAAAAAADAYkAAAAAAAEBeQAAAAAAAQF1AAAAAAAAAT0AAAAAAAEBdQAAAAAAAQFxAAAAAAABAWEAAAAAAAIBiQAAAAAAAwGBAAAAAAACAZEAAAAAAAMBQQAAAAAAAAFRAAAAAAADAV0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAV0AAAAAAAABUQAAAAAAAwFBAAAAAAACAZEAAAAAAAMBgQAAAAAAAgGJAAAAAAABAWEAAAAAAAEBcQAAAAAAAQF1AAAAAAAAAT0AAAAAAAEBdQAAAAAAAQF5AAAAAAADAYkAAAAAAAGBjQAAAAAAAIGBAAAAAAABAYUAAAAAAAABEQAAAAAAAwFpAAAAAAABAVUAAAAAAAOBkQAAAAAAAQG9AAAAAAABAYUAAAAAAAKBpQAAAAAAAAF5AAAAAAADgZkAAAAAAAKBmQAAAAAAAQGhAAAAAAABAZ0AAAAAAAIBjQAAAAAAAIGpAAAAAAADgY0AAAAAAAOBhQAAAAAAAIGNAAAAAAAAgZ0AAAAAAAMBkQAAAAAAAQGRAAAAAAAAgZkAAAAAAACBkQAAAAAAAgF9AAAAAAABgY0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgY0AAAAAAAIBfQAAAAAAAIGRAAAAAAAAgZkAAAAAAAEBkQAAAAAAAwGRAAAAAAAAgZ0AAAAAAACBjQAAAAAAA4GFAAAAAAADgY0AAAAAAACBqQAAAAAAAgGNAAAAAAABAZ0AAAAAAAEBoQAAAAAAAoGZAAAAAAADgZkAAAAAAAABeQAAAAAAAoGlAAAAAAABAYUAAAAAAAEBvQAAAAAAA4HNAAAAAAABgY0AAAAAAAMByQAAAAAAAoGpAAAAAAACAaEAAAAAAAEBsQAAAAAAA4HFAAAAAAACwcUAAAAAAAABsQAAAAAAAgHJAAAAAAABAaEAAAAAAAOBtQAAAAAAAgGpAAAAAAACga0AAAAAAABBwQAAAAAAA4GhAAAAAAAAQcEAAAAAAAMBpQAAAAAAAAGFAAAAAAAAAakA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAAakAAAAAAAABhQAAAAAAAwGlAAAAAAAAQcEAAAAAAAOBoQAAAAAAAEHBAAAAAAACga0AAAAAAAIBqQAAAAAAA4G1AAAAAAABAaEAAAAAAAIByQAAAAAAAAGxAAAAAAACwcUAAAAAAAOBxQAAAAAAAQGxAAAAAAACAaEAAAAAAAKBqQAAAAAAAwHJAAAAAAABgY0AAAAAAAOBzQAAAAAAA4HRAAAAAAAAgb0AAAAAAAOB4QAAAAAAAQHJAAAAAAABwcEAAAAAAAPByQAAAAAAA8HNAAAAAAABwdkAAAAAAANBzQAAAAAAAwHNAAAAAAAAQckAAAAAAAPBzQAAAAAAAIG9AAAAAAACQcEAAAAAAADB1QAAAAAAAIHBAAAAAAADAdUAAAAAAAMBtQAAAAAAAwGdAAAAAAABAb0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAb0AAAAAAAMBnQAAAAAAAwG1AAAAAAADAdUAAAAAAACBwQAAAAAAAMHVAAAAAAACQcEAAAAAAACBvQAAAAAAA8HNAAAAAAAAQckAAAAAAAMBzQAAAAAAA0HNAAAAAAABwdkAAAAAAAPBzQAAAAAAA8HJAAAAAAABwcEAAAAAAAEByQAAAAAAA4HhAAAAAAAAgb0AAAAAAAOB0QAAAAAAAsHVAAAAAAACAdEAAAAAAAIB6QAAAAAAAAHZAAAAAAACQdEAAAAAAAEB1QAAAAAAAIHhAAAAAAADAekAAAAAAALB5QAAAAAAAYHlAAAAAAAAwdEAAAAAAAPB3QAAAAAAA4HNAAAAAAACQdkAAAAAAADB4QAAAAAAAwHBAAAAAAACwd0AAAAAAAMByQAAAAAAAAG5AAAAAAACgdEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACgdEAAAAAAAABuQAAAAAAAwHJAAAAAAACwd0AAAAAAAMBwQAAAAAAAMHhAAAAAAACQdkAAAAAAAOBzQAAAAAAA8HdAAAAAAAAwdEAAAAAAAGB5QAAAAAAAsHlAAAAAAADAekAAAAAAACB4QAAAAAAAQHVAAAAAAACQdEAAAAAAAAB2QAAAAAAAgHpAAAAAAACAdEAAAAAAALB1QAAAAAAAsHpAAAAAAAAQeUAAAAAAACB8QAAAAAAAEHxAAAAAAACgeEAAAAAAACB7QAAAAAAAUHtAAAAAAAAggEAAAAAAAFB7QAAAAAAAwH1AAAAAAADgdEAAAAAAAKB6QAAAAAAAwHZAAAAAAACAe0AAAAAAAPB7QAAAAAAAIHJAAAAAAAAgfUAAAAAAAPBzQAAAAAAAAHVAAAAAAADwd0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADwd0AAAAAAAAB1QAAAAAAA8HNAAAAAAAAgfUAAAAAAACByQAAAAAAA8HtAAAAAAACAe0AAAAAAAMB2QAAAAAAAoHpAAAAAAADgdEAAAAAAAMB9QAAAAAAAUHtAAAAAAAAggEAAAAAAAFB7QAAAAAAAIHtAAAAAAACgeEAAAAAAABB8QAAAAAAAIHxAAAAAAAAQeUAAAAAAALB6QAAAAAAAAH9AAAAAAAAQfEAAAAAAAAB+QAAAAAAAaIBAAAAAAADwfUAAAAAAAIiAQAAAAAAAMH9AAAAAAAAggUAAAAAAAIB+QAAAAAAAWIBAAAAAAABweEAAAAAAAIB9QAAAAAAA8HxAAAAAAACgfEAAAAAAAACBQAAAAAAAEHNAAAAAAAAAfkAAAAAAAJB0QAAAAAAAQHpAAAAAAADAe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADAe0AAAAAAAEB6QAAAAAAAkHRAAAAAAAAAfkAAAAAAABBzQAAAAAAAAIFAAAAAAACgfEAAAAAAAPB8QAAAAAAAgH1AAAAAAABweEAAAAAAAFiAQAAAAAAAgH5AAAAAAAAggUAAAAAAADB/QAAAAAAAiIBAAAAAAADwfUAAAAAAAGiAQAAAAAAAAH5AAAAAAAAQfEAAAAAAAAB/QAAAAAAAUIBAAAAAAADwf0AAAAAAAPiAQAAAAAAAqIJAAAAAAAAwgUAAAAAAAFiBQAAAAAAAcIBAAAAAAABgg0AAAAAAALCAQAAAAAAASIJAAAAAAAAAfEAAAAAAAFB/QAAAAAAACIBAAAAAAACYgEAAAAAAAFiBQAAAAAAAMHdAAAAAAACwgEAAAAAAAFB5QAAAAAAAgHxAAAAAAAAggEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAggEAAAAAAAIB8QAAAAAAAUHlAAAAAAACwgEAAAAAAADB3QAAAAAAAWIFAAAAAAACYgEAAAAAAAAiAQAAAAAAAUH9AAAAAAAAAfEAAAAAAAEiCQAAAAAAAsIBAAAAAAABgg0AAAAAAAHCAQAAAAAAAWIFAAAAAAAAwgUAAAAAAAKiCQAAAAAAA+IBAAAAAAADwf0AAAAAAAFCAQAAAAAAAaIJAAAAAAADwgkAAAAAAAECDQAAAAAAA4INAAAAAAABggkAAAAAAAEiDQAAAAAAAsIFAAAAAAABohkAAAAAAADCCQAAAAAAAwINAAAAAAADQf0AAAAAAACiBQAAAAAAAEIJAAAAAAAD4gEAAAAAAAMCBQAAAAAAAIHlAAAAAAAAYg0AAAAAAAHB+QAAAAAAAAIFAAAAAAABYgkA=","dtype":"float64","shape":[40]}]}},"id":"4eaaf16d-8dca-4988-a239-328e727b5d8c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"}},"id":"8832d096-7b5b-43a0-b9c7-385376a33da8","type":"ResetTool"},{"attributes":{"callback":null,"end":19},"id":"f456c491-deb9-4908-8623-4bb92ca32063","type":"Range1d"},{"attributes":{"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"}},"id":"8226e321-986a-453e-8bc5-8ae5560fd51a","type":"HelpTool"},{"attributes":{"plot":{"id":"6197f8c5-f205-420f-8ca7-2898e2dfa684","subtype":"Figure","type":"Plot"}},"id":"a281eace-2920-4993-8409-4ab278891966","type":"SaveTool"},{"attributes":{"callback":null,"end":800},"id":"2f55f341-5058-441e-ae35-3a012fdffc24","type":"Range1d"}],"root_ids":["6197f8c5-f205-420f-8ca7-2898e2dfa684"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"2e984916-160d-46d2-85cd-25ec3e1eafb6","elementid":"994d6eb2-6784-4c06-b801-76f738d2b81e","modelid":"6197f8c5-f205-420f-8ca7-2898e2dfa684"}];
                
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
