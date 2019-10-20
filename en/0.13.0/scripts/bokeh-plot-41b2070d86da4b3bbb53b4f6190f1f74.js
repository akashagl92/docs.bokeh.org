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
      };var element = document.getElementById("6d6b1701-69c8-4da3-ba22-2fcba03ea0fe");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6d6b1701-69c8-4da3-ba22-2fcba03ea0fe' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"9213689c-aa01-493d-ae0f-77494aebc712":{"roots":{"references":[{"attributes":{},"id":"12478cbe-a82c-4ffd-9255-267b3f325da8","type":"LinearScale"},{"attributes":{"formatter":{"id":"9802450c-7b94-4ea5-82ec-353403532acb","type":"BasicTickFormatter"},"plot":{"id":"97825125-6a6f-4951-b4be-bb042c8104c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4a8f7cd-9595-4253-bcb5-65f0593bb559","type":"BasicTicker"}},"id":"500602a1-3dda-4603-827f-fdf65ba3d96e","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f04b6b7c-0190-453f-8069-4a05c6522328","type":"BoxAnnotation"},{"attributes":{},"id":"6cedf6c7-f5ca-4355-9d1b-b1d56e922621","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"9772131b-f3fb-4d17-b737-c3e0b4d419da","type":"Selection"},"selection_policy":{"id":"ba11578f-863c-43f7-a6f4-c3dae0ff6fcf","type":"UnionRenderers"}},"id":"c22a5a2a-8304-4aa6-99e8-bdc626c0c745","type":"ColumnDataSource"},{"attributes":{},"id":"6105df00-d617-40d0-9662-1c57a03c9110","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e3672ca-bbfd-4159-9393-399bbf51b58e","type":"PanTool"},{"id":"16dc8d6f-43aa-4ce3-9399-d4d234d043ea","type":"WheelZoomTool"},{"id":"0ed7e0c3-1e65-4d73-86c8-94bc3e3b6c9e","type":"BoxZoomTool"},{"id":"558eac99-b4cc-458a-b0da-3c38a30d772e","type":"SaveTool"},{"id":"3df7039e-78ec-4128-8861-acb6355650dd","type":"ResetTool"},{"id":"c6cc7b16-fe77-4d08-8989-9416b995b06d","type":"HelpTool"}]},"id":"204635f0-c7ce-4262-b99d-44e2f6a20009","type":"Toolbar"},{"attributes":{"below":[{"id":"500602a1-3dda-4603-827f-fdf65ba3d96e","type":"LinearAxis"}],"left":[{"id":"445aa36e-2e8b-420a-a45e-21cc6ed6fd0d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"500602a1-3dda-4603-827f-fdf65ba3d96e","type":"LinearAxis"},{"id":"eed30d43-4ef3-4785-b95c-51fbcd3f77ee","type":"Grid"},{"id":"445aa36e-2e8b-420a-a45e-21cc6ed6fd0d","type":"LinearAxis"},{"id":"c945d85d-4fc5-4134-8355-c7811f006b2b","type":"Grid"},{"id":"37b5026e-ef16-4dd3-b4a7-c1c71f11a535","type":"BoxAnnotation"},{"id":"e0227b58-6c67-4015-b5a4-4eb802139a69","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"204635f0-c7ce-4262-b99d-44e2f6a20009","type":"Toolbar"},"x_range":{"id":"a25e6a3b-8cca-4d4c-befe-9207213754f8","type":"DataRange1d"},"x_scale":{"id":"12478cbe-a82c-4ffd-9255-267b3f325da8","type":"LinearScale"},"y_range":{"id":"d2b31f35-e7f8-4bf9-b926-dc6d6e8fa1d3","type":"DataRange1d"},"y_scale":{"id":"d19a11f7-5469-4c5d-83e1-bb0987b435e6","type":"LinearScale"}},"id":"97825125-6a6f-4951-b4be-bb042c8104c6","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"d2b31f35-e7f8-4bf9-b926-dc6d6e8fa1d3","type":"DataRange1d"},{"attributes":{},"id":"66019d84-8d0f-4817-b8f4-32cbe7ea03de","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a25e6a3b-8cca-4d4c-befe-9207213754f8","type":"DataRange1d"},{"attributes":{},"id":"d19a11f7-5469-4c5d-83e1-bb0987b435e6","type":"LinearScale"},{"attributes":{"source":{"id":"ef3b38ae-0774-42b8-84dd-ceae1d95dbc2","type":"ColumnDataSource"}},"id":"8a56a856-9a41-4b02-b4f5-08aec855e5bc","type":"CDSView"},{"attributes":{},"id":"1ac53dd8-a53a-440b-a168-992304f2714f","type":"HelpTool"},{"attributes":{"source":{"id":"c22a5a2a-8304-4aa6-99e8-bdc626c0c745","type":"ColumnDataSource"}},"id":"5aa12984-90ee-4698-a846-2b78a83f892b","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"97825125-6a6f-4951-b4be-bb042c8104c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6105df00-d617-40d0-9662-1c57a03c9110","type":"BasicTicker"}},"id":"c945d85d-4fc5-4134-8355-c7811f006b2b","type":"Grid"},{"attributes":{},"id":"26880e0f-2b47-41ac-919e-21e83767210b","type":"PanTool"},{"attributes":{},"id":"0bcc7993-7663-40fd-b40a-197ba54f4ecb","type":"ResetTool"},{"attributes":{"formatter":{"id":"97ed956f-be47-4fcb-bbc9-d881041506ff","type":"BasicTickFormatter"},"plot":{"id":"9f2a1947-fd23-463a-964f-cd171ae749d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"72128aee-6625-4ba0-a033-b6e91de235b0","type":"BasicTicker"}},"id":"963ff269-ae18-4e59-8706-1358137d8a46","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26880e0f-2b47-41ac-919e-21e83767210b","type":"PanTool"},{"id":"b11a8b6b-7a26-4295-ae19-a651d637673f","type":"WheelZoomTool"},{"id":"afecda28-1232-49f8-9a3d-7782fa73269a","type":"BoxZoomTool"},{"id":"9c3b89a7-51b3-4f3c-af2c-0e2c49bdc615","type":"SaveTool"},{"id":"20921bc7-f066-483e-901a-1f3d88b25a07","type":"ResetTool"},{"id":"1ac53dd8-a53a-440b-a168-992304f2714f","type":"HelpTool"}]},"id":"2f1403f9-aea3-4903-928b-1aede3530730","type":"Toolbar"},{"attributes":{},"id":"1fcea3e1-66ac-449d-89ba-1d1447652ea6","type":"BasicTickFormatter"},{"attributes":{},"id":"39b8625c-9eb7-4330-bf68-6ee40b6699d7","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"305ef131-3dac-4543-a545-b16406123b0c","type":"Triangle"},{"attributes":{},"id":"b5a96818-d74d-48c8-98b3-3ebccc8dd327","type":"BasicTickFormatter"},{"attributes":{},"id":"103ee562-6e74-46a9-b8e5-1fb2ab6a820e","type":"LinearScale"},{"attributes":{"callback":null},"id":"fdd26cd2-7988-4adc-a1ec-1cbe180c68ab","type":"DataRange1d"},{"attributes":{},"id":"b5ddfe3e-a8ff-4226-a293-1607ca11a3b4","type":"LinearScale"},{"attributes":{"plot":{"id":"9f2a1947-fd23-463a-964f-cd171ae749d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"39b8625c-9eb7-4330-bf68-6ee40b6699d7","type":"BasicTicker"}},"id":"284a85c4-906f-4343-b28c-66a6c95bcf57","type":"Grid"},{"attributes":{"formatter":{"id":"1fcea3e1-66ac-449d-89ba-1d1447652ea6","type":"BasicTickFormatter"},"plot":{"id":"9f2a1947-fd23-463a-964f-cd171ae749d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"39b8625c-9eb7-4330-bf68-6ee40b6699d7","type":"BasicTicker"}},"id":"d9a39007-3b60-4667-83c3-1aad15894943","type":"LinearAxis"},{"attributes":{},"id":"72128aee-6625-4ba0-a033-b6e91de235b0","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"9f2a1947-fd23-463a-964f-cd171ae749d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"72128aee-6625-4ba0-a033-b6e91de235b0","type":"BasicTicker"}},"id":"4c8b29ee-41f2-41a3-93c7-32c6a2e4fe3c","type":"Grid"},{"attributes":{},"id":"9c3b89a7-51b3-4f3c-af2c-0e2c49bdc615","type":"SaveTool"},{"attributes":{},"id":"20921bc7-f066-483e-901a-1f3d88b25a07","type":"ResetTool"},{"attributes":{},"id":"b11a8b6b-7a26-4295-ae19-a651d637673f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"f04b6b7c-0190-453f-8069-4a05c6522328","type":"BoxAnnotation"}},"id":"afecda28-1232-49f8-9a3d-7782fa73269a","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3cb23ac-34e2-42a0-9929-ad4f89ccf5d6","type":"Triangle"},{"attributes":{"formatter":{"id":"b5a96818-d74d-48c8-98b3-3ebccc8dd327","type":"BasicTickFormatter"},"plot":{"id":"97825125-6a6f-4951-b4be-bb042c8104c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6105df00-d617-40d0-9662-1c57a03c9110","type":"BasicTicker"}},"id":"445aa36e-2e8b-420a-a45e-21cc6ed6fd0d","type":"LinearAxis"},{"attributes":{"overlay":{"id":"37b5026e-ef16-4dd3-b4a7-c1c71f11a535","type":"BoxAnnotation"}},"id":"0ed7e0c3-1e65-4d73-86c8-94bc3e3b6c9e","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"cd69d1f3-9bca-4295-9875-4e5dac478da7","type":"Selection"},"selection_policy":{"id":"f41628a1-ceb9-4725-afa7-ca1a2032d769","type":"UnionRenderers"}},"id":"ef3b38ae-0774-42b8-84dd-ceae1d95dbc2","type":"ColumnDataSource"},{"attributes":{},"id":"c3c3beb7-7e30-45f4-85fc-84426b878a71","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ecd79914-31a1-4021-ba1c-05821b7c9f67","type":"BoxAnnotation"},{"attributes":{"source":{"id":"ac6a50a7-f2d2-439b-9c60-b68489725cbe","type":"ColumnDataSource"}},"id":"063d73ca-10b4-4447-bdcd-bb9c43afda22","type":"CDSView"},{"attributes":{},"id":"3fb760a6-57a5-4046-b39c-6275e9ed72a8","type":"PanTool"},{"attributes":{"below":[{"id":"d9a39007-3b60-4667-83c3-1aad15894943","type":"LinearAxis"}],"left":[{"id":"963ff269-ae18-4e59-8706-1358137d8a46","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d9a39007-3b60-4667-83c3-1aad15894943","type":"LinearAxis"},{"id":"284a85c4-906f-4343-b28c-66a6c95bcf57","type":"Grid"},{"id":"963ff269-ae18-4e59-8706-1358137d8a46","type":"LinearAxis"},{"id":"4c8b29ee-41f2-41a3-93c7-32c6a2e4fe3c","type":"Grid"},{"id":"f04b6b7c-0190-453f-8069-4a05c6522328","type":"BoxAnnotation"},{"id":"b04906f1-e364-4874-91bf-4d433e030777","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"2f1403f9-aea3-4903-928b-1aede3530730","type":"Toolbar"},"x_range":{"id":"425bdd90-ead4-47f1-8b5d-550ddaa9dda0","type":"DataRange1d"},"x_scale":{"id":"103ee562-6e74-46a9-b8e5-1fb2ab6a820e","type":"LinearScale"},"y_range":{"id":"fdd26cd2-7988-4adc-a1ec-1cbe180c68ab","type":"DataRange1d"},"y_scale":{"id":"b5ddfe3e-a8ff-4226-a293-1607ca11a3b4","type":"LinearScale"}},"id":"9f2a1947-fd23-463a-964f-cd171ae749d0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f41628a1-ceb9-4725-afa7-ca1a2032d769","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"c22a5a2a-8304-4aa6-99e8-bdc626c0c745","type":"ColumnDataSource"},"glyph":{"id":"305ef131-3dac-4543-a545-b16406123b0c","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3cb23ac-34e2-42a0-9929-ad4f89ccf5d6","type":"Triangle"},"selection_glyph":null,"view":{"id":"5aa12984-90ee-4698-a846-2b78a83f892b","type":"CDSView"}},"id":"b04906f1-e364-4874-91bf-4d433e030777","type":"GlyphRenderer"},{"attributes":{},"id":"558eac99-b4cc-458a-b0da-3c38a30d772e","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"abe41644-f5ba-4b7b-8204-c8da2499369d","type":"Selection"},"selection_policy":{"id":"fd8bbfd3-6330-4fc9-9937-31350daff955","type":"UnionRenderers"}},"id":"ac6a50a7-f2d2-439b-9c60-b68489725cbe","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"66019d84-8d0f-4817-b8f4-32cbe7ea03de","type":"BasicTickFormatter"},"plot":{"id":"2a0e6972-0fbd-460e-9538-2c5b39e06da6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ac3c820-da3c-45fe-a770-cad09914aa1f","type":"BasicTicker"}},"id":"13a0378f-9e0c-4567-83f2-2429c8399a4a","type":"LinearAxis"},{"attributes":{"overlay":{"id":"ecd79914-31a1-4021-ba1c-05821b7c9f67","type":"BoxAnnotation"}},"id":"f8ffd6ef-c420-4b22-914a-c38440de66a6","type":"BoxZoomTool"},{"attributes":{},"id":"0896ff37-0df6-4343-937a-237f2e764e07","type":"HelpTool"},{"attributes":{},"id":"16dc8d6f-43aa-4ce3-9399-d4d234d043ea","type":"WheelZoomTool"},{"attributes":{},"id":"eb086a70-7afa-497a-b6aa-481abc3827a5","type":"WheelZoomTool"},{"attributes":{},"id":"9772131b-f3fb-4d17-b737-c3e0b4d419da","type":"Selection"},{"attributes":{},"id":"f44582d4-9a4b-4e9b-8275-3d182f3b5f65","type":"BasicTicker"},{"attributes":{"callback":null},"id":"425bdd90-ead4-47f1-8b5d-550ddaa9dda0","type":"DataRange1d"},{"attributes":{"plot":{"id":"97825125-6a6f-4951-b4be-bb042c8104c6","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4a8f7cd-9595-4253-bcb5-65f0593bb559","type":"BasicTicker"}},"id":"eed30d43-4ef3-4785-b95c-51fbcd3f77ee","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6705f3a4-b9e6-421a-aebb-6dba02d2e6ae","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"2a0e6972-0fbd-460e-9538-2c5b39e06da6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f44582d4-9a4b-4e9b-8275-3d182f3b5f65","type":"BasicTicker"}},"id":"c84b7af9-81a4-4d04-a800-fcf4b28517a6","type":"Grid"},{"attributes":{"data_source":{"id":"ef3b38ae-0774-42b8-84dd-ceae1d95dbc2","type":"ColumnDataSource"},"glyph":{"id":"0f7629b6-d756-4ff1-accf-681fa47088ef","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4e18505f-f204-428d-a343-d6ff8700e3e7","type":"Square"},"selection_glyph":null,"view":{"id":"8a56a856-9a41-4b02-b4f5-08aec855e5bc","type":"CDSView"}},"id":"e0227b58-6c67-4015-b5a4-4eb802139a69","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3fb760a6-57a5-4046-b39c-6275e9ed72a8","type":"PanTool"},{"id":"eb086a70-7afa-497a-b6aa-481abc3827a5","type":"WheelZoomTool"},{"id":"f8ffd6ef-c420-4b22-914a-c38440de66a6","type":"BoxZoomTool"},{"id":"6cedf6c7-f5ca-4355-9d1b-b1d56e922621","type":"SaveTool"},{"id":"0bcc7993-7663-40fd-b40a-197ba54f4ecb","type":"ResetTool"},{"id":"0896ff37-0df6-4343-937a-237f2e764e07","type":"HelpTool"}]},"id":"7cbb617d-c0cb-4c5a-9fa5-81c478f7bac0","type":"Toolbar"},{"attributes":{},"id":"4e3672ca-bbfd-4159-9393-399bbf51b58e","type":"PanTool"},{"attributes":{},"id":"4ac3c820-da3c-45fe-a770-cad09914aa1f","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f7629b6-d756-4ff1-accf-681fa47088ef","type":"Square"},{"attributes":{"plot":{"id":"2a0e6972-0fbd-460e-9538-2c5b39e06da6","subtype":"Figure","type":"Plot"},"ticker":{"id":"4ac3c820-da3c-45fe-a770-cad09914aa1f","type":"BasicTicker"}},"id":"bca1216f-1700-498e-8ae8-cc9bd5e29419","type":"Grid"},{"attributes":{},"id":"ba11578f-863c-43f7-a6f4-c3dae0ff6fcf","type":"UnionRenderers"},{"attributes":{},"id":"42a53ee4-5291-4858-9597-1be9f27bbd6a","type":"LinearScale"},{"attributes":{},"id":"abe41644-f5ba-4b7b-8204-c8da2499369d","type":"Selection"},{"attributes":{"formatter":{"id":"6cdd5a5b-3872-4864-9827-e255c14f4254","type":"BasicTickFormatter"},"plot":{"id":"2a0e6972-0fbd-460e-9538-2c5b39e06da6","subtype":"Figure","type":"Plot"},"ticker":{"id":"f44582d4-9a4b-4e9b-8275-3d182f3b5f65","type":"BasicTicker"}},"id":"e9a16c4a-28fb-4937-8b4d-62bee1734c6b","type":"LinearAxis"},{"attributes":{},"id":"c6cc7b16-fe77-4d08-8989-9416b995b06d","type":"HelpTool"},{"attributes":{"data_source":{"id":"ac6a50a7-f2d2-439b-9c60-b68489725cbe","type":"ColumnDataSource"},"glyph":{"id":"c163a40a-0147-4f3e-b407-6f2f55a8818f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6705f3a4-b9e6-421a-aebb-6dba02d2e6ae","type":"Circle"},"selection_glyph":null,"view":{"id":"063d73ca-10b4-4447-bdcd-bb9c43afda22","type":"CDSView"}},"id":"9d7fee59-59be-4fc0-b664-f7fe3844d646","type":"GlyphRenderer"},{"attributes":{},"id":"fd8bbfd3-6330-4fc9-9937-31350daff955","type":"UnionRenderers"},{"attributes":{},"id":"3df7039e-78ec-4128-8861-acb6355650dd","type":"ResetTool"},{"attributes":{"callback":null},"id":"1ef9e8d4-b224-472b-8a21-a1ef0f6e6f42","type":"DataRange1d"},{"attributes":{"callback":null},"id":"eb9f9824-af81-4f33-a22e-2e2102c6a6d2","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37b5026e-ef16-4dd3-b4a7-c1c71f11a535","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c163a40a-0147-4f3e-b407-6f2f55a8818f","type":"Circle"},{"attributes":{},"id":"6cdd5a5b-3872-4864-9827-e255c14f4254","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"13a0378f-9e0c-4567-83f2-2429c8399a4a","type":"LinearAxis"}],"left":[{"id":"e9a16c4a-28fb-4937-8b4d-62bee1734c6b","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"13a0378f-9e0c-4567-83f2-2429c8399a4a","type":"LinearAxis"},{"id":"bca1216f-1700-498e-8ae8-cc9bd5e29419","type":"Grid"},{"id":"e9a16c4a-28fb-4937-8b4d-62bee1734c6b","type":"LinearAxis"},{"id":"c84b7af9-81a4-4d04-a800-fcf4b28517a6","type":"Grid"},{"id":"ecd79914-31a1-4021-ba1c-05821b7c9f67","type":"BoxAnnotation"},{"id":"9d7fee59-59be-4fc0-b664-f7fe3844d646","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7cbb617d-c0cb-4c5a-9fa5-81c478f7bac0","type":"Toolbar"},"x_range":{"id":"1ef9e8d4-b224-472b-8a21-a1ef0f6e6f42","type":"DataRange1d"},"x_scale":{"id":"42a53ee4-5291-4858-9597-1be9f27bbd6a","type":"LinearScale"},"y_range":{"id":"eb9f9824-af81-4f33-a22e-2e2102c6a6d2","type":"DataRange1d"},"y_scale":{"id":"c3c3beb7-7e30-45f4-85fc-84426b878a71","type":"LinearScale"}},"id":"2a0e6972-0fbd-460e-9538-2c5b39e06da6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9802450c-7b94-4ea5-82ec-353403532acb","type":"BasicTickFormatter"},{"attributes":{},"id":"cd69d1f3-9bca-4295-9875-4e5dac478da7","type":"Selection"},{"attributes":{},"id":"97ed956f-be47-4fcb-bbc9-d881041506ff","type":"BasicTickFormatter"},{"attributes":{},"id":"e4a8f7cd-9595-4253-bcb5-65f0593bb559","type":"BasicTicker"},{"attributes":{"children":[{"id":"2a0e6972-0fbd-460e-9538-2c5b39e06da6","subtype":"Figure","type":"Plot"},{"id":"9f2a1947-fd23-463a-964f-cd171ae749d0","subtype":"Figure","type":"Plot"},{"id":"97825125-6a6f-4951-b4be-bb042c8104c6","subtype":"Figure","type":"Plot"}]},"id":"1f9289eb-0730-424b-b4e6-cfb1bb98925d","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e18505f-f204-428d-a343-d6ff8700e3e7","type":"Square"}],"root_ids":["1f9289eb-0730-424b-b4e6-cfb1bb98925d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"9213689c-aa01-493d-ae0f-77494aebc712","roots":{"1f9289eb-0730-424b-b4e6-cfb1bb98925d":"6d6b1701-69c8-4da3-ba22-2fcba03ea0fe"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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