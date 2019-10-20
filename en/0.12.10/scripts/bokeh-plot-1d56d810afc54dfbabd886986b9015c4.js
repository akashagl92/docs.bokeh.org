(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("05bbb59f-e41b-4921-9cd3-60af104bef4b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '05bbb59f-e41b-4921-9cd3-60af104bef4b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"62d0c0e6-3eda-49e8-93ce-e88c1c268a38":{"roots":{"references":[{"attributes":{},"id":"6d3ffb7d-fb5f-4dfd-a028-df8eaed8966f","type":"SaveTool"},{"attributes":{},"id":"576bfc87-ef89-4118-949d-28d4314dd085","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1420a983-58a2-4662-bad2-5c22e48bff11","type":"ColumnDataSource"},"glyph":{"id":"7177d8a4-412d-48c3-a749-dc8cc6e75b0c","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3e7cd6e7-fe5a-427e-ba13-e86f9d3ef524","type":"Patches"},"selection_glyph":null,"view":{"id":"a0f1a064-433c-42a0-9d22-1d8bdeb4aaaf","type":"CDSView"}},"id":"7abae6c5-47a3-469d-b32f-e4d396c18856","type":"GlyphRenderer"},{"attributes":{},"id":"e298fd5c-5225-40e2-8db6-e6deda292eda","type":"HelpTool"},{"attributes":{},"id":"0eddf54b-5393-4358-b260-912e58196333","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"3e7cd6e7-fe5a-427e-ba13-e86f9d3ef524","type":"Patches"},{"attributes":{"plot":null,"text":""},"id":"84abfe84-2832-4b69-b0ff-ecc807acbcd8","type":"Title"},{"attributes":{},"id":"5813f998-35ea-4853-9646-86356f3f8d55","type":"LinearScale"},{"attributes":{"below":[{"id":"854110f3-039c-42ab-88ae-2e6d63f579e4","type":"LinearAxis"}],"left":[{"id":"e89edcdc-7f7f-4855-ac7b-ba9d29b6a946","type":"LinearAxis"}],"renderers":[{"id":"854110f3-039c-42ab-88ae-2e6d63f579e4","type":"LinearAxis"},{"id":"0e93795b-3682-413e-97aa-316b61e6796c","type":"Grid"},{"id":"e89edcdc-7f7f-4855-ac7b-ba9d29b6a946","type":"LinearAxis"},{"id":"b7aa2e51-28e8-4346-8f9c-ee7eefc08032","type":"Grid"},{"id":"6fbb0733-4053-4380-8e99-5f00043719f0","type":"BoxAnnotation"},{"id":"7abae6c5-47a3-469d-b32f-e4d396c18856","type":"GlyphRenderer"}],"title":{"id":"84abfe84-2832-4b69-b0ff-ecc807acbcd8","type":"Title"},"toolbar":{"id":"0dcf079c-a6ed-4b4a-80cc-b3d2d114a4e3","type":"Toolbar"},"x_range":{"id":"7c3fdefb-0e17-4233-b242-2c920ccc6e33","type":"Range1d"},"x_scale":{"id":"7fffcd32-ff33-4633-9366-9c4b96b1f565","type":"LinearScale"},"y_range":{"id":"1a062aad-caca-4b5b-88a8-3bc5245503f4","type":"Range1d"},"y_scale":{"id":"5813f998-35ea-4853-9646-86356f3f8d55","type":"LinearScale"}},"id":"8bb76041-c481-4022-84f6-b8654ec2fb62","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"576bfc87-ef89-4118-949d-28d4314dd085","type":"BasicTickFormatter"},"plot":{"id":"8bb76041-c481-4022-84f6-b8654ec2fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ae9c79-e3d1-48d4-a39b-ce972489260b","type":"BasicTicker"}},"id":"854110f3-039c-42ab-88ae-2e6d63f579e4","type":"LinearAxis"},{"attributes":{},"id":"d5eea28f-312c-43fd-9396-d25fe7b103aa","type":"BasicTickFormatter"},{"attributes":{},"id":"07001829-4382-4dce-99f0-b5458d70b00d","type":"WheelZoomTool"},{"attributes":{},"id":"a4ae9c79-e3d1-48d4-a39b-ce972489260b","type":"BasicTicker"},{"attributes":{"overlay":{"id":"6fbb0733-4053-4380-8e99-5f00043719f0","type":"BoxAnnotation"}},"id":"d6550612-928e-4913-a35d-9a72ca64702e","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"d5eea28f-312c-43fd-9396-d25fe7b103aa","type":"BasicTickFormatter"},"plot":{"id":"8bb76041-c481-4022-84f6-b8654ec2fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f0a0a23-5207-4e95-91f8-9d95635900b5","type":"BasicTicker"}},"id":"e89edcdc-7f7f-4855-ac7b-ba9d29b6a946","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6fbb0733-4053-4380-8e99-5f00043719f0","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":800},"id":"1a062aad-caca-4b5b-88a8-3bc5245503f4","type":"Range1d"},{"attributes":{"source":{"id":"1420a983-58a2-4662-bad2-5c22e48bff11","type":"ColumnDataSource"}},"id":"a0f1a064-433c-42a0-9d22-1d8bdeb4aaaf","type":"CDSView"},{"attributes":{},"id":"7fffcd32-ff33-4633-9366-9c4b96b1f565","type":"LinearScale"},{"attributes":{"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"8bb76041-c481-4022-84f6-b8654ec2fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"a4ae9c79-e3d1-48d4-a39b-ce972489260b","type":"BasicTicker"}},"id":"0e93795b-3682-413e-97aa-316b61e6796c","type":"Grid"},{"attributes":{"callback":null,"end":19},"id":"7c3fdefb-0e17-4233-b242-2c920ccc6e33","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"field":"fill_color"},"line_alpha":{"value":0.8},"line_color":{"value":null},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"7177d8a4-412d-48c3-a749-dc8cc6e75b0c","type":"Patches"},{"attributes":{},"id":"7f0a0a23-5207-4e95-91f8-9d95635900b5","type":"BasicTicker"},{"attributes":{"dimension":1,"minor_grid_line_color":{"value":"#eeeeee"},"plot":{"id":"8bb76041-c481-4022-84f6-b8654ec2fb62","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f0a0a23-5207-4e95-91f8-9d95635900b5","type":"BasicTicker"}},"id":"b7aa2e51-28e8-4346-8f9c-ee7eefc08032","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a0fcfac4-0d8c-4716-935f-216e0d002117","type":"PanTool"},{"id":"07001829-4382-4dce-99f0-b5458d70b00d","type":"WheelZoomTool"},{"id":"d6550612-928e-4913-a35d-9a72ca64702e","type":"BoxZoomTool"},{"id":"6d3ffb7d-fb5f-4dfd-a028-df8eaed8966f","type":"SaveTool"},{"id":"0eddf54b-5393-4358-b260-912e58196333","type":"ResetTool"},{"id":"e298fd5c-5225-40e2-8db6-e6deda292eda","type":"HelpTool"}]},"id":"0dcf079c-a6ed-4b4a-80cc-b3d2d114a4e3","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color"],"data":{"fill_color":["#5e4fa2","#3288bd","#66c2a5","#abdda4","#e6f598","#fee08b","#fdae61","#f46d43","#d53e4f","#9e0142"],"xs":[[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],[19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]],"ys":[{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwFNAAAAAAADAV0AAAAAAAAA4QAAAAAAAADRAAAAAAAAAR0AAAAAAAIBWQAAAAAAAgFRAAAAAAACAUEAAAAAAAEBSQAAAAAAAgFBAAAAAAACARkAAAAAAAMBQQAAAAAAAACxAAAAAAAAAQkAAAAAAAIBSQAAAAAAAAC5AAAAAAAAAQUAAAAAAAIBQQAAAAAAAgENAAAAAAABAUkA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABAUkAAAAAAAIBDQAAAAAAAgFBAAAAAAAAAQUAAAAAAAAAuQAAAAAAAgFJAAAAAAAAAQkAAAAAAAAAsQAAAAAAAwFBAAAAAAACARkAAAAAAAIBQQAAAAAAAQFJAAAAAAACAUEAAAAAAAIBUQAAAAAAAgFZAAAAAAAAAR0AAAAAAAAA0QAAAAAAAADhAAAAAAADAV0AAAAAAAMBTQAAAAAAAAF9AAAAAAABAZ0AAAAAAAABbQAAAAAAAAFdAAAAAAADAUEAAAAAAAMBlQAAAAAAAwGRAAAAAAABAYUAAAAAAAABbQAAAAAAAYGFAAAAAAACgYEAAAAAAAMBfQAAAAAAAwFBAAAAAAAAAWkAAAAAAAEBgQAAAAAAAgFxAAAAAAAAAWkAAAAAAAIBYQAAAAAAAgExAAAAAAACAW0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACAW0AAAAAAAIBMQAAAAAAAgFhAAAAAAAAAWkAAAAAAAIBcQAAAAAAAQGBAAAAAAAAAWkAAAAAAAMBQQAAAAAAAwF9AAAAAAACgYEAAAAAAAGBhQAAAAAAAAFtAAAAAAABAYUAAAAAAAMBkQAAAAAAAwGVAAAAAAADAUEAAAAAAAABXQAAAAAAAAFtAAAAAAABAZ0AAAAAAAABfQAAAAAAAgGVAAAAAAABAbEAAAAAAAMBoQAAAAAAAgGBAAAAAAACAVUAAAAAAAABqQAAAAAAAQGhAAAAAAABgZUAAAAAAAABfQAAAAAAAQGZAAAAAAABAZ0AAAAAAAIBoQAAAAAAAQFtAAAAAAAAgZEAAAAAAACBqQAAAAAAAwGJAAAAAAAAgZ0AAAAAAAABkQAAAAAAAgFRAAAAAAAAgZUA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAgZUAAAAAAAIBUQAAAAAAAAGRAAAAAAAAgZ0AAAAAAAMBiQAAAAAAAIGpAAAAAAAAgZEAAAAAAAEBbQAAAAAAAgGhAAAAAAABAZ0AAAAAAAEBmQAAAAAAAAF9AAAAAAABgZUAAAAAAAEBoQAAAAAAAAGpAAAAAAACAVUAAAAAAAIBgQAAAAAAAwGhAAAAAAABAbEAAAAAAAIBlQAAAAAAAYGxAAAAAAAAgc0AAAAAAAHBwQAAAAAAAgGVAAAAAAACAY0AAAAAAAEBvQAAAAAAAIHBAAAAAAACgZ0AAAAAAAGBhQAAAAAAAQGlAAAAAAAAga0AAAAAAACBwQAAAAAAAwF9AAAAAAACgbUAAAAAAAOBsQAAAAAAAwGxAAAAAAABAakAAAAAAAIBnQAAAAAAAgFxAAAAAAABgaEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgaEAAAAAAAIBcQAAAAAAAgGdAAAAAAABAakAAAAAAAMBsQAAAAAAA4GxAAAAAAACgbUAAAAAAAMBfQAAAAAAAIHBAAAAAAAAga0AAAAAAAEBpQAAAAAAAYGFAAAAAAACgZ0AAAAAAACBwQAAAAAAAQG9AAAAAAACAY0AAAAAAAIBlQAAAAAAAcHBAAAAAAAAgc0AAAAAAAGBsQAAAAAAAEHJAAAAAAABQeUAAAAAAACB0QAAAAAAAwHBAAAAAAACgZUAAAAAAABB0QAAAAAAAIHVAAAAAAABAb0AAAAAAAIBpQAAAAAAAIGtAAAAAAACQc0AAAAAAABByQAAAAAAAQGJAAAAAAADAc0AAAAAAAABxQAAAAAAA4HJAAAAAAAAgbEAAAAAAAGBxQAAAAAAAIGBAAAAAAABgckA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAABgckAAAAAAACBgQAAAAAAAYHFAAAAAAAAgbEAAAAAAAOByQAAAAAAAAHFAAAAAAADAc0AAAAAAAEBiQAAAAAAAEHJAAAAAAACQc0AAAAAAACBrQAAAAAAAgGlAAAAAAABAb0AAAAAAACB1QAAAAAAAEHRAAAAAAACgZUAAAAAAAMBwQAAAAAAAIHRAAAAAAABQeUAAAAAAABByQAAAAAAA0HVAAAAAAABQe0AAAAAAANB0QAAAAAAAwHVAAAAAAAAQcEAAAAAAAFB1QAAAAAAAQHhAAAAAAABAcEAAAAAAAHBwQAAAAAAAwHBAAAAAAAAwdUAAAAAAAHB0QAAAAAAAwGpAAAAAAACgdUAAAAAAALB0QAAAAAAAYHVAAAAAAACAckAAAAAAAHByQAAAAAAAYGVAAAAAAACQdEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACQdEAAAAAAAGBlQAAAAAAAcHJAAAAAAACAckAAAAAAAGB1QAAAAAAAsHRAAAAAAACgdUAAAAAAAMBqQAAAAAAAcHRAAAAAAAAwdUAAAAAAAMBwQAAAAAAAcHBAAAAAAABAcEAAAAAAAEB4QAAAAAAAUHVAAAAAAAAQcEAAAAAAAMB1QAAAAAAA0HRAAAAAAABQe0AAAAAAANB1QAAAAAAAgHpAAAAAAADAf0AAAAAAABB5QAAAAAAAMHdAAAAAAACAcUAAAAAAAHB5QAAAAAAAEHlAAAAAAADQc0AAAAAAAPByQAAAAAAAwHRAAAAAAADwd0AAAAAAAJB1QAAAAAAAQGxAAAAAAABQeUAAAAAAABB2QAAAAAAAMHdAAAAAAADQc0AAAAAAAHB4QAAAAAAAoGlAAAAAAAAwekA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAAAwekAAAAAAAKBpQAAAAAAAcHhAAAAAAADQc0AAAAAAADB3QAAAAAAAEHZAAAAAAABQeUAAAAAAAEBsQAAAAAAAkHVAAAAAAADwd0AAAAAAAMB0QAAAAAAA8HJAAAAAAADQc0AAAAAAABB5QAAAAAAAcHlAAAAAAACAcUAAAAAAADB3QAAAAAAAEHlAAAAAAADAf0AAAAAAAIB6QAAAAAAAQH9AAAAAAACwgkAAAAAAANB5QAAAAAAAEHlAAAAAAABgc0AAAAAAACB+QAAAAAAAUHpAAAAAAACweEAAAAAAAGB1QAAAAAAAoHdAAAAAAACgfUAAAAAAADB5QAAAAAAAwG5AAAAAAABQfEAAAAAAAKB7QAAAAAAAYHhAAAAAAABgdUAAAAAAAAB9QAAAAAAAsHFAAAAAAACwe0A=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAACwe0AAAAAAALBxQAAAAAAAAH1AAAAAAABgdUAAAAAAAGB4QAAAAAAAoHtAAAAAAABQfEAAAAAAAMBuQAAAAAAAMHlAAAAAAACgfUAAAAAAAKB3QAAAAAAAYHVAAAAAAACweEAAAAAAAFB6QAAAAAAAIH5AAAAAAABgc0AAAAAAABB5QAAAAAAA0HlAAAAAAACwgkAAAAAAAEB/QAAAAAAAuIFAAAAAAACYg0AAAAAAALB7QAAAAAAA0HxAAAAAAABgdkAAAAAAAIiBQAAAAAAAYH5AAAAAAABwfkAAAAAAACB2QAAAAAAAsHxAAAAAAACgf0AAAAAAAFB8QAAAAAAAAHFAAAAAAABwfkAAAAAAALiAQAAAAAAAUHtAAAAAAAAgd0AAAAAAABB/QAAAAAAAkHRAAAAAAADogEA=","dtype":"float64","shape":[40]},{"__ndarray__":"AAAAAADogEAAAAAAAJB0QAAAAAAAEH9AAAAAAAAgd0AAAAAAAFB7QAAAAAAAuIBAAAAAAABwfkAAAAAAAABxQAAAAAAAUHxAAAAAAACgf0AAAAAAALB8QAAAAAAAIHZAAAAAAABwfkAAAAAAAGB+QAAAAAAAiIFAAAAAAABgdkAAAAAAANB8QAAAAAAAsHtAAAAAAACYg0AAAAAAALiBQAAAAAAACINAAAAAAAC4hUAAAAAAAOiAQAAAAAAAuIBAAAAAAAAge0AAAAAAANiBQAAAAAAAOIJAAAAAAAAggEAAAAAAANB3QAAAAAAAgH1AAAAAAAC4gkAAAAAAAEB9QAAAAAAAoHNAAAAAAAB4gUAAAAAAAKCBQAAAAAAA4HxAAAAAAACAeEAAAAAAANB/QAAAAAAAYHhAAAAAAAA4gkA=","dtype":"float64","shape":[40]}]}},"id":"1420a983-58a2-4662-bad2-5c22e48bff11","type":"ColumnDataSource"},{"attributes":{},"id":"a0fcfac4-0d8c-4716-935f-216e0d002117","type":"PanTool"}],"root_ids":["8bb76041-c481-4022-84f6-b8654ec2fb62"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"62d0c0e6-3eda-49e8-93ce-e88c1c268a38","elementid":"05bbb59f-e41b-4921-9cd3-60af104bef4b","modelid":"8bb76041-c481-4022-84f6-b8654ec2fb62"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
