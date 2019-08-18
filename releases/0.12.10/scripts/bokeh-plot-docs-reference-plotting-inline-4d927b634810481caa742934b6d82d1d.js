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
      };var element = document.getElementById("8ee218f6-e833-406a-9e56-bc18d6db1501");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8ee218f6-e833-406a-9e56-bc18d6db1501' but no matching script tag was found. ")
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
                    var docs_json = {"53d6d6d7-9635-43a4-871c-e686d7ae9378":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"592d2319-fc12-4200-b80b-d3dab205e9eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"abdc1b35-736d-4697-bcba-026680552dd7","type":"BasicTicker"}},"id":"d746cd27-a82d-4d0e-97be-0071c3e7dc0e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"b47e83ba-cfac-4358-90fa-0f350129f519","type":"Patches"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","line_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"d9910d79-a9f8-4114-8724-71b084a11688","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d9910d79-a9f8-4114-8724-71b084a11688","type":"ColumnDataSource"},"glyph":{"id":"6522dd82-2689-4e19-bb2e-4bda2a61fd0a","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b47e83ba-cfac-4358-90fa-0f350129f519","type":"Patches"},"selection_glyph":null,"view":{"id":"328be0b4-8aed-4aa2-8ed3-0adb2d7b2a4f","type":"CDSView"}},"id":"279d3285-ee00-4b7a-8327-7e9a3653df26","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37490f19-b05f-4c38-94e7-791f8045ae64","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"6ad404c2-3469-407e-9394-d2c743cfd767","type":"LinearAxis"}],"left":[{"id":"8d06f134-f1b7-4da3-9d09-2b855043ef10","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"6ad404c2-3469-407e-9394-d2c743cfd767","type":"LinearAxis"},{"id":"6dd9979b-95a2-4273-96a6-2946ba8131d6","type":"Grid"},{"id":"8d06f134-f1b7-4da3-9d09-2b855043ef10","type":"LinearAxis"},{"id":"d746cd27-a82d-4d0e-97be-0071c3e7dc0e","type":"Grid"},{"id":"37490f19-b05f-4c38-94e7-791f8045ae64","type":"BoxAnnotation"},{"id":"279d3285-ee00-4b7a-8327-7e9a3653df26","type":"GlyphRenderer"}],"title":{"id":"7bc4f953-382b-4ca9-a2fd-6f0b58e2443c","type":"Title"},"toolbar":{"id":"b1aeb12a-743a-4d1f-a30b-eab0b529c5f0","type":"Toolbar"},"x_range":{"id":"4c674c8b-ce19-4ea9-ada2-1767f567288c","type":"DataRange1d"},"x_scale":{"id":"0c2a012d-90a0-4be7-871b-80995487e03a","type":"LinearScale"},"y_range":{"id":"e321333d-9d16-44d2-841f-cc490fed340e","type":"DataRange1d"},"y_scale":{"id":"2ed95fe3-d0a4-46ff-9986-0ebd5dd40409","type":"LinearScale"}},"id":"592d2319-fc12-4200-b80b-d3dab205e9eb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a3aecad5-f390-434b-a47b-01723de72c45","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a3aecad5-f390-434b-a47b-01723de72c45","type":"PanTool"},{"id":"d89fdc52-f493-40c5-a988-046e0af27d01","type":"WheelZoomTool"},{"id":"a5b6887c-0fc3-4dbc-b4c0-3106bf046ae1","type":"BoxZoomTool"},{"id":"4232b853-4bc3-4bd8-8dec-e5d3f1cac279","type":"SaveTool"},{"id":"09d19f6e-49d6-4099-ae0d-1e9fcc70123e","type":"ResetTool"},{"id":"26219460-e2b9-4dfa-bf99-c7c18bd2dac1","type":"HelpTool"}]},"id":"b1aeb12a-743a-4d1f-a30b-eab0b529c5f0","type":"Toolbar"},{"attributes":{"source":{"id":"d9910d79-a9f8-4114-8724-71b084a11688","type":"ColumnDataSource"}},"id":"328be0b4-8aed-4aa2-8ed3-0adb2d7b2a4f","type":"CDSView"},{"attributes":{"callback":null},"id":"4c674c8b-ce19-4ea9-ada2-1767f567288c","type":"DataRange1d"},{"attributes":{},"id":"d89fdc52-f493-40c5-a988-046e0af27d01","type":"WheelZoomTool"},{"attributes":{},"id":"f8e6b1b8-e2d1-49ad-8ec1-635f2890a669","type":"BasicTicker"},{"attributes":{"overlay":{"id":"37490f19-b05f-4c38-94e7-791f8045ae64","type":"BoxAnnotation"}},"id":"a5b6887c-0fc3-4dbc-b4c0-3106bf046ae1","type":"BoxZoomTool"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"6522dd82-2689-4e19-bb2e-4bda2a61fd0a","type":"Patches"},{"attributes":{},"id":"4232b853-4bc3-4bd8-8dec-e5d3f1cac279","type":"SaveTool"},{"attributes":{"formatter":{"id":"10d02cb5-9cf7-4bcf-bdab-c4b0d25ddc1d","type":"BasicTickFormatter"},"plot":{"id":"592d2319-fc12-4200-b80b-d3dab205e9eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8e6b1b8-e2d1-49ad-8ec1-635f2890a669","type":"BasicTicker"}},"id":"6ad404c2-3469-407e-9394-d2c743cfd767","type":"LinearAxis"},{"attributes":{},"id":"09d19f6e-49d6-4099-ae0d-1e9fcc70123e","type":"ResetTool"},{"attributes":{"callback":null},"id":"e321333d-9d16-44d2-841f-cc490fed340e","type":"DataRange1d"},{"attributes":{},"id":"26219460-e2b9-4dfa-bf99-c7c18bd2dac1","type":"HelpTool"},{"attributes":{},"id":"0c2a012d-90a0-4be7-871b-80995487e03a","type":"LinearScale"},{"attributes":{},"id":"10d02cb5-9cf7-4bcf-bdab-c4b0d25ddc1d","type":"BasicTickFormatter"},{"attributes":{},"id":"2ed95fe3-d0a4-46ff-9986-0ebd5dd40409","type":"LinearScale"},{"attributes":{},"id":"a47f39f4-3dda-4c69-9666-c795506a9d02","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"592d2319-fc12-4200-b80b-d3dab205e9eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"f8e6b1b8-e2d1-49ad-8ec1-635f2890a669","type":"BasicTicker"}},"id":"6dd9979b-95a2-4273-96a6-2946ba8131d6","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"7bc4f953-382b-4ca9-a2fd-6f0b58e2443c","type":"Title"},{"attributes":{"formatter":{"id":"a47f39f4-3dda-4c69-9666-c795506a9d02","type":"BasicTickFormatter"},"plot":{"id":"592d2319-fc12-4200-b80b-d3dab205e9eb","subtype":"Figure","type":"Plot"},"ticker":{"id":"abdc1b35-736d-4697-bcba-026680552dd7","type":"BasicTicker"}},"id":"8d06f134-f1b7-4da3-9d09-2b855043ef10","type":"LinearAxis"},{"attributes":{},"id":"abdc1b35-736d-4697-bcba-026680552dd7","type":"BasicTicker"}],"root_ids":["592d2319-fc12-4200-b80b-d3dab205e9eb"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"53d6d6d7-9635-43a4-871c-e686d7ae9378","elementid":"8ee218f6-e833-406a-9e56-bc18d6db1501","modelid":"592d2319-fc12-4200-b80b-d3dab205e9eb"}];
                
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
