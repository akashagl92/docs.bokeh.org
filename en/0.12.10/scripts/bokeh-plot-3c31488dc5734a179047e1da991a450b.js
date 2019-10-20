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
      };var element = document.getElementById("0cfa3cf6-f1d8-411a-8be7-032ccfdad687");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0cfa3cf6-f1d8-411a-8be7-032ccfdad687' but no matching script tag was found. ")
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
                    var docs_json = {"ccfaa6b8-b57b-4c1b-a083-9c62b555acd4":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf3c2aed-791f-47ba-910e-966bcc54cb1d","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"ce9a0f9d-1590-4957-8c50-5b8c9fe0cb1c","type":"Title"},{"attributes":{},"id":"8f8cbdf2-b329-4fc4-b508-cd06f78b7c49","type":"HelpTool"},{"attributes":{},"id":"d01da18f-fa2f-4758-b35c-c9237abfd16c","type":"LinearScale"},{"attributes":{"callback":null},"id":"18d9bd7d-9010-4933-959c-2a017c17a293","type":"DataRange1d"},{"attributes":{},"id":"2482636c-a561-4a93-b5f5-f1293a5bdb6d","type":"BasicTickFormatter"},{"attributes":{},"id":"2934e6cf-3df2-4184-af7b-79d8cae16ea2","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"72103e1f-fe8d-480a-b2bc-311fe57fe6dc","type":"Patches"},{"attributes":{"plot":{"id":"b0a14065-840c-47ff-8a26-78b3eff777a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e556f424-a003-40b3-bc93-e5dbb3c5b720","type":"BasicTicker"}},"id":"fb1283b8-6eb0-46da-afbb-3ca6638ee130","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"b0a14065-840c-47ff-8a26-78b3eff777a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"195ced3f-6edb-4bce-b83a-259547f788dc","type":"BasicTicker"}},"id":"30451744-ed2e-4cb4-b02b-4099c4e08b6d","type":"Grid"},{"attributes":{"formatter":{"id":"39c75c99-d0a0-4539-b5cc-188dffeb2f52","type":"BasicTickFormatter"},"plot":{"id":"b0a14065-840c-47ff-8a26-78b3eff777a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"e556f424-a003-40b3-bc93-e5dbb3c5b720","type":"BasicTicker"}},"id":"bb0bdc86-2674-48d0-b565-831f7e5603ed","type":"LinearAxis"},{"attributes":{},"id":"39c75c99-d0a0-4539-b5cc-188dffeb2f52","type":"BasicTickFormatter"},{"attributes":{},"id":"e556f424-a003-40b3-bc93-e5dbb3c5b720","type":"BasicTicker"},{"attributes":{"formatter":{"id":"2482636c-a561-4a93-b5f5-f1293a5bdb6d","type":"BasicTickFormatter"},"plot":{"id":"b0a14065-840c-47ff-8a26-78b3eff777a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"195ced3f-6edb-4bce-b83a-259547f788dc","type":"BasicTicker"}},"id":"aef54609-afc3-4160-8ee3-f3f02e8cf316","type":"LinearAxis"},{"attributes":{},"id":"195ced3f-6edb-4bce-b83a-259547f788dc","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"cd39d162-a78a-4f55-bfe3-e829c8380da3","type":"Patches"},{"attributes":{"source":{"id":"78c52c73-470f-4220-a2f6-fbb1de6414f1","type":"ColumnDataSource"}},"id":"7f53dfb9-eb08-4f8d-80d1-9a91821728eb","type":"CDSView"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","line_color","fill_alpha","line_alpha"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"78c52c73-470f-4220-a2f6-fbb1de6414f1","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"cf3c2aed-791f-47ba-910e-966bcc54cb1d","type":"BoxAnnotation"}},"id":"e9bbbde3-d946-4e16-83f5-bbe214d0b615","type":"BoxZoomTool"},{"attributes":{},"id":"5db88f25-f53e-49ca-8387-40bb51dafa6b","type":"SaveTool"},{"attributes":{"data_source":{"id":"78c52c73-470f-4220-a2f6-fbb1de6414f1","type":"ColumnDataSource"},"glyph":{"id":"cd39d162-a78a-4f55-bfe3-e829c8380da3","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"72103e1f-fe8d-480a-b2bc-311fe57fe6dc","type":"Patches"},"selection_glyph":null,"view":{"id":"7f53dfb9-eb08-4f8d-80d1-9a91821728eb","type":"CDSView"}},"id":"79d361ff-8ab8-40b7-8216-3a209020a176","type":"GlyphRenderer"},{"attributes":{},"id":"9d3032dc-af0b-4657-8518-b25c0ea50b93","type":"PanTool"},{"attributes":{"below":[{"id":"bb0bdc86-2674-48d0-b565-831f7e5603ed","type":"LinearAxis"}],"left":[{"id":"aef54609-afc3-4160-8ee3-f3f02e8cf316","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"bb0bdc86-2674-48d0-b565-831f7e5603ed","type":"LinearAxis"},{"id":"fb1283b8-6eb0-46da-afbb-3ca6638ee130","type":"Grid"},{"id":"aef54609-afc3-4160-8ee3-f3f02e8cf316","type":"LinearAxis"},{"id":"30451744-ed2e-4cb4-b02b-4099c4e08b6d","type":"Grid"},{"id":"cf3c2aed-791f-47ba-910e-966bcc54cb1d","type":"BoxAnnotation"},{"id":"79d361ff-8ab8-40b7-8216-3a209020a176","type":"GlyphRenderer"}],"title":{"id":"ce9a0f9d-1590-4957-8c50-5b8c9fe0cb1c","type":"Title"},"toolbar":{"id":"df4f62e5-f36a-4f7d-b29b-2584d331c279","type":"Toolbar"},"x_range":{"id":"6cd13585-89df-41b4-8593-13e3fd7811a8","type":"DataRange1d"},"x_scale":{"id":"d01da18f-fa2f-4758-b35c-c9237abfd16c","type":"LinearScale"},"y_range":{"id":"18d9bd7d-9010-4933-959c-2a017c17a293","type":"DataRange1d"},"y_scale":{"id":"2934e6cf-3df2-4184-af7b-79d8cae16ea2","type":"LinearScale"}},"id":"b0a14065-840c-47ff-8a26-78b3eff777a2","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7498eaf4-e373-4479-9706-abea5f55aabb","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d3032dc-af0b-4657-8518-b25c0ea50b93","type":"PanTool"},{"id":"8681a2f7-8068-490c-bdd4-9ba67f65def6","type":"WheelZoomTool"},{"id":"e9bbbde3-d946-4e16-83f5-bbe214d0b615","type":"BoxZoomTool"},{"id":"5db88f25-f53e-49ca-8387-40bb51dafa6b","type":"SaveTool"},{"id":"7498eaf4-e373-4479-9706-abea5f55aabb","type":"ResetTool"},{"id":"8f8cbdf2-b329-4fc4-b508-cd06f78b7c49","type":"HelpTool"}]},"id":"df4f62e5-f36a-4f7d-b29b-2584d331c279","type":"Toolbar"},{"attributes":{},"id":"8681a2f7-8068-490c-bdd4-9ba67f65def6","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"6cd13585-89df-41b4-8593-13e3fd7811a8","type":"DataRange1d"}],"root_ids":["b0a14065-840c-47ff-8a26-78b3eff777a2"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"ccfaa6b8-b57b-4c1b-a083-9c62b555acd4","elementid":"0cfa3cf6-f1d8-411a-8be7-032ccfdad687","modelid":"b0a14065-840c-47ff-8a26-78b3eff777a2"}];
                
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
