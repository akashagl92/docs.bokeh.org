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
      };var element = document.getElementById("630479a1-5613-436a-b087-2fb6926479f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '630479a1-5613-436a-b087-2fb6926479f7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"aa76c76d-3740-4e11-b851-15f03c9271ed":{"roots":{"references":[{"attributes":{"formatter":{"id":"b0e76d41-1276-440b-882e-14f5c23eac17","type":"BasicTickFormatter"},"plot":{"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fee11c79-8275-4624-bbdf-d4544bbb303b","type":"BasicTicker"}},"id":"dfcdb750-5af1-4045-a4c4-ee69601814f6","type":"LinearAxis"},{"attributes":{"callback":null},"id":"8e41078b-a362-4fba-a64e-b38acf0c3536","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"bac12120-008a-47d6-9a97-c98beb185bd2","type":"Title"},{"attributes":{"formatter":{"id":"cb954b9d-dba1-455d-ba59-4e5541cdf68f","type":"BasicTickFormatter"},"plot":{"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b535de03-91fc-4ce1-b287-7ff243cf8ba3","type":"BasicTicker"}},"id":"0da9b560-15ac-4478-ab01-fc2e10a40967","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"255ed648-d8f9-4af4-aca0-01a8beb2a0b8","type":"Circle"},{"attributes":{"plot":{"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"}},"id":"ca5b9d9e-57eb-4ea8-8f25-cb9c18058e3b","type":"PanTool"},{"attributes":{"below":[{"id":"0da9b560-15ac-4478-ab01-fc2e10a40967","type":"LinearAxis"}],"left":[{"id":"dfcdb750-5af1-4045-a4c4-ee69601814f6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"0da9b560-15ac-4478-ab01-fc2e10a40967","type":"LinearAxis"},{"id":"4fce588e-6fb9-4eac-ba51-db13aeb2f62f","type":"Grid"},{"id":"dfcdb750-5af1-4045-a4c4-ee69601814f6","type":"LinearAxis"},{"id":"11ae236b-945b-4800-b5d0-b0c36f1b2879","type":"Grid"},{"id":"a111e93d-8fa5-4ab5-8539-917a890279af","type":"GlyphRenderer"}],"title":{"id":"bac12120-008a-47d6-9a97-c98beb185bd2","type":"Title"},"tool_events":{"id":"bda69a2b-a01d-4f06-b23b-a56148244e2b","type":"ToolEvents"},"toolbar":{"id":"419e1b51-46b5-4f4c-b358-00966efbb966","type":"Toolbar"},"x_range":{"id":"24f16672-a64c-4b68-81e3-3cc686d24777","type":"DataRange1d"},"y_range":{"id":"8e41078b-a362-4fba-a64e-b38acf0c3536","type":"DataRange1d"}},"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fee11c79-8275-4624-bbdf-d4544bbb303b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"2a54f95a-af0a-4dd1-a171-f1187d81ae63","type":"ColumnDataSource"},"glyph":{"id":"c1d5ab18-fc2e-4fe4-9f20-43bbbd4cdd9a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"255ed648-d8f9-4af4-aca0-01a8beb2a0b8","type":"Circle"},"selection_glyph":null},"id":"a111e93d-8fa5-4ab5-8539-917a890279af","type":"GlyphRenderer"},{"attributes":{},"id":"b0e76d41-1276-440b-882e-14f5c23eac17","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"}},"id":"54e3e0d5-41d9-4949-b139-7f53fb43fdbd","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ca5b9d9e-57eb-4ea8-8f25-cb9c18058e3b","type":"PanTool"},{"id":"4b9348aa-64e0-45a9-8dac-2fc371301836","type":"ResetTool"},{"id":"54e3e0d5-41d9-4949-b139-7f53fb43fdbd","type":"SaveTool"}]},"id":"419e1b51-46b5-4f4c-b358-00966efbb966","type":"Toolbar"},{"attributes":{"plot":{"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"b535de03-91fc-4ce1-b287-7ff243cf8ba3","type":"BasicTicker"}},"id":"4fce588e-6fb9-4eac-ba51-db13aeb2f62f","type":"Grid"},{"attributes":{},"id":"b535de03-91fc-4ce1-b287-7ff243cf8ba3","type":"BasicTicker"},{"attributes":{},"id":"bda69a2b-a01d-4f06-b23b-a56148244e2b","type":"ToolEvents"},{"attributes":{"plot":{"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"}},"id":"4b9348aa-64e0-45a9-8dac-2fc371301836","type":"ResetTool"},{"attributes":{},"id":"cb954b9d-dba1-455d-ba59-4e5541cdf68f","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1d5ab18-fc2e-4fe4-9f20-43bbbd4cdd9a","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1.0,2.5,3.0,2.0],"y":[2.0,3.0,1.0,1.5]}},"id":"2a54f95a-af0a-4dd1-a171-f1187d81ae63","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"24f16672-a64c-4b68-81e3-3cc686d24777","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"3892a61b-84e9-47aa-bf73-fffd269b2a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"fee11c79-8275-4624-bbdf-d4544bbb303b","type":"BasicTicker"}},"id":"11ae236b-945b-4800-b5d0-b0c36f1b2879","type":"Grid"}],"root_ids":["3892a61b-84e9-47aa-bf73-fffd269b2a0f"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"aa76c76d-3740-4e11-b851-15f03c9271ed","elementid":"630479a1-5613-436a-b087-2fb6926479f7","modelid":"3892a61b-84e9-47aa-bf73-fffd269b2a0f"}];
              
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