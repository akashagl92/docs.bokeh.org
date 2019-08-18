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
      };var element = document.getElementById("0f79fa50-9405-4578-a6f5-e40d22cfeaf3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0f79fa50-9405-4578-a6f5-e40d22cfeaf3' but no matching script tag was found. ")
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
                  var docs_json = {"5faff27e-65f2-464f-a238-523d246f42bb":{"roots":{"references":[{"attributes":{"data_source":{"id":"8867b9f0-7bc5-434a-9714-633fa5662b68","type":"ColumnDataSource"},"glyph":{"id":"d6c6ef32-3fcb-4cae-a193-29feaeaedeff","type":"Cross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d41f07b1-4931-443d-9882-817394f049be","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"dce8230a-1cc4-418e-aa89-983b109f9a6c","type":"Plot"},"ticker":{"id":"5e15ea9f-8ed1-4333-b297-170ed3718e95","type":"BasicTicker"}},"id":"a405998c-a229-41e6-9171-0e8edb033a26","type":"Grid"},{"attributes":{},"id":"5e15ea9f-8ed1-4333-b297-170ed3718e95","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a187b6a9-818b-4465-ba9b-d2356265d026","type":"BasicTickFormatter"},"plot":{"id":"dce8230a-1cc4-418e-aa89-983b109f9a6c","type":"Plot"},"ticker":{"id":"5e15ea9f-8ed1-4333-b297-170ed3718e95","type":"BasicTicker"}},"id":"ad838425-cef6-44ac-a777-81ed521715b1","type":"LinearAxis"},{"attributes":{},"id":"63a56e30-4c73-457a-8bda-1be3088c2380","type":"BasicTicker"},{"attributes":{"plot":{"id":"dce8230a-1cc4-418e-aa89-983b109f9a6c","type":"Plot"},"ticker":{"id":"63a56e30-4c73-457a-8bda-1be3088c2380","type":"BasicTicker"}},"id":"af2df33b-66eb-40ba-8d7c-dbe0a89c3ca2","type":"Grid"},{"attributes":{"callback":null},"id":"a0098f9f-5412-400a-a0f8-1a411645371d","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"8867b9f0-7bc5-434a-9714-633fa5662b68","type":"ColumnDataSource"},{"attributes":{},"id":"a187b6a9-818b-4465-ba9b-d2356265d026","type":"BasicTickFormatter"},{"attributes":{},"id":"7b96bb93-092a-4417-a6eb-92001f7ef01a","type":"ToolEvents"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6c6ef32-3fcb-4cae-a193-29feaeaedeff","type":"Cross"},{"attributes":{},"id":"9bd50433-29ea-4ad1-b16c-d2f208b024ca","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"f55de457-35ac-43fc-a84b-d0367c733a07","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ad838425-cef6-44ac-a777-81ed521715b1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d41f07b1-4931-443d-9882-817394f049be","type":"GlyphRenderer"},{"id":"f55de457-35ac-43fc-a84b-d0367c733a07","type":"LinearAxis"},{"id":"ad838425-cef6-44ac-a777-81ed521715b1","type":"LinearAxis"},{"id":"af2df33b-66eb-40ba-8d7c-dbe0a89c3ca2","type":"Grid"},{"id":"a405998c-a229-41e6-9171-0e8edb033a26","type":"Grid"}],"title":null,"tool_events":{"id":"7b96bb93-092a-4417-a6eb-92001f7ef01a","type":"ToolEvents"},"toolbar":{"id":"4bf5d24f-b83a-41b9-87ce-ac827d15004b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a0098f9f-5412-400a-a0f8-1a411645371d","type":"DataRange1d"},"y_range":{"id":"65415313-ea80-4301-8fb1-b8d854a04b14","type":"DataRange1d"}},"id":"dce8230a-1cc4-418e-aa89-983b109f9a6c","type":"Plot"},{"attributes":{"callback":null},"id":"65415313-ea80-4301-8fb1-b8d854a04b14","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9bd50433-29ea-4ad1-b16c-d2f208b024ca","type":"BasicTickFormatter"},"plot":{"id":"dce8230a-1cc4-418e-aa89-983b109f9a6c","type":"Plot"},"ticker":{"id":"63a56e30-4c73-457a-8bda-1be3088c2380","type":"BasicTicker"}},"id":"f55de457-35ac-43fc-a84b-d0367c733a07","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4bf5d24f-b83a-41b9-87ce-ac827d15004b","type":"Toolbar"}],"root_ids":["dce8230a-1cc4-418e-aa89-983b109f9a6c"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"5faff27e-65f2-464f-a238-523d246f42bb","elementid":"0f79fa50-9405-4578-a6f5-e40d22cfeaf3","modelid":"dce8230a-1cc4-418e-aa89-983b109f9a6c"}];
                  
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