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
      };var element = document.getElementById("f7094aff-a8da-44e2-a3a0-614ea46bb118");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7094aff-a8da-44e2-a3a0-614ea46bb118' but no matching script tag was found. ")
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
                  var docs_json = {"6d265065-2648-45b2-9cce-5ba87b0e28fb":{"roots":{"references":[{"attributes":{"formatter":{"id":"0f5d352e-ff33-4f66-b06b-62d0946d7806","type":"BasicTickFormatter"},"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda992d9-f7ed-470c-a9d1-eec746ac788e","type":"BasicTicker"}},"id":"a645f0c2-7652-476a-bd57-23588db53230","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"},"ticker":{"id":"fda992d9-f7ed-470c-a9d1-eec746ac788e","type":"BasicTicker"}},"id":"9ed0c384-9935-46f0-aab9-4a3eef31253d","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"f236f308-39d0-43f2-bc1c-8568bda798a4","type":"Title"},{"attributes":{"callback":null},"id":"e212088d-dd58-4acb-b01b-2eb0310d3cae","type":"DataRange1d"},{"attributes":{"below":[{"id":"faccd224-4184-4ce3-95fc-36527784f81d","type":"LinearAxis"}],"left":[{"id":"a645f0c2-7652-476a-bd57-23588db53230","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"faccd224-4184-4ce3-95fc-36527784f81d","type":"LinearAxis"},{"id":"47433a5f-441c-4d16-84b4-44ee662cc9f6","type":"Grid"},{"id":"a645f0c2-7652-476a-bd57-23588db53230","type":"LinearAxis"},{"id":"9ed0c384-9935-46f0-aab9-4a3eef31253d","type":"Grid"},{"id":"b35391d7-8d60-4ad2-baae-bbe760412653","type":"BoxAnnotation"},{"id":"dcb431e2-ebcf-492e-a94a-46af8efc508a","type":"GlyphRenderer"}],"title":{"id":"f236f308-39d0-43f2-bc1c-8568bda798a4","type":"Title"},"tool_events":{"id":"832ad84d-ca79-4dfd-9c8b-d04c748f1ff1","type":"ToolEvents"},"toolbar":{"id":"72a2baad-2b13-45fd-bc11-6d176cfbde27","type":"Toolbar"},"x_range":{"id":"e212088d-dd58-4acb-b01b-2eb0310d3cae","type":"DataRange1d"},"y_range":{"id":"718cd103-752e-461b-a594-8967bc523c33","type":"DataRange1d"}},"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"}},"id":"ea60f6ca-6ce2-493d-b6e0-6bfee5b7654c","type":"SaveTool"},{"attributes":{"overlay":{"id":"b35391d7-8d60-4ad2-baae-bbe760412653","type":"BoxAnnotation"},"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"}},"id":"e0d7e287-27bf-42dc-ae8e-9d3e6cb32238","type":"BoxZoomTool"},{"attributes":{},"id":"0f5d352e-ff33-4f66-b06b-62d0946d7806","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"5079e9b9-82d1-4e9d-be14-b718193dad91","type":"Patches"},{"attributes":{"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"}},"id":"03bffcf1-d19c-4ce3-a439-7dd408df9d74","type":"ResetTool"},{"attributes":{"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"}},"id":"e35f65f3-84a2-4e02-8dea-1a2ac0d147c6","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"}},"id":"a6c58b20-bac9-4d4e-9b7c-14245329bc7e","type":"HelpTool"},{"attributes":{"callback":null},"id":"718cd103-752e-461b-a594-8967bc523c33","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys","line_color","fill_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"5584ef7d-0d7c-4dee-ab97-869086f8e5bf","type":"ColumnDataSource"},{"attributes":{},"id":"13a7a45a-0659-4819-801b-efcda7a129bc","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"42c7cecf-02da-40d9-aaba-c763848117d2","type":"PanTool"},{"id":"e35f65f3-84a2-4e02-8dea-1a2ac0d147c6","type":"WheelZoomTool"},{"id":"e0d7e287-27bf-42dc-ae8e-9d3e6cb32238","type":"BoxZoomTool"},{"id":"ea60f6ca-6ce2-493d-b6e0-6bfee5b7654c","type":"SaveTool"},{"id":"03bffcf1-d19c-4ce3-a439-7dd408df9d74","type":"ResetTool"},{"id":"a6c58b20-bac9-4d4e-9b7c-14245329bc7e","type":"HelpTool"}]},"id":"72a2baad-2b13-45fd-bc11-6d176cfbde27","type":"Toolbar"},{"attributes":{},"id":"832ad84d-ca79-4dfd-9c8b-d04c748f1ff1","type":"ToolEvents"},{"attributes":{},"id":"fda992d9-f7ed-470c-a9d1-eec746ac788e","type":"BasicTicker"},{"attributes":{"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"}},"id":"42c7cecf-02da-40d9-aaba-c763848117d2","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"ec465532-117e-435f-be00-0774a5a4857b","type":"Patches"},{"attributes":{"formatter":{"id":"c1a3a188-eb57-4c83-a1c3-38e3535f7de5","type":"BasicTickFormatter"},"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"},"ticker":{"id":"13a7a45a-0659-4819-801b-efcda7a129bc","type":"BasicTicker"}},"id":"faccd224-4184-4ce3-95fc-36527784f81d","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5584ef7d-0d7c-4dee-ab97-869086f8e5bf","type":"ColumnDataSource"},"glyph":{"id":"5079e9b9-82d1-4e9d-be14-b718193dad91","type":"Patches"},"hover_glyph":null,"nonselection_glyph":{"id":"ec465532-117e-435f-be00-0774a5a4857b","type":"Patches"},"selection_glyph":null},"id":"dcb431e2-ebcf-492e-a94a-46af8efc508a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475","subtype":"Figure","type":"Plot"},"ticker":{"id":"13a7a45a-0659-4819-801b-efcda7a129bc","type":"BasicTicker"}},"id":"47433a5f-441c-4d16-84b4-44ee662cc9f6","type":"Grid"},{"attributes":{},"id":"c1a3a188-eb57-4c83-a1c3-38e3535f7de5","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b35391d7-8d60-4ad2-baae-bbe760412653","type":"BoxAnnotation"}],"root_ids":["b30aeeaa-a73b-4ca8-9ebf-de8d10627475"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"6d265065-2648-45b2-9cce-5ba87b0e28fb","elementid":"f7094aff-a8da-44e2-a3a0-614ea46bb118","modelid":"b30aeeaa-a73b-4ca8-9ebf-de8d10627475"}];
                  
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