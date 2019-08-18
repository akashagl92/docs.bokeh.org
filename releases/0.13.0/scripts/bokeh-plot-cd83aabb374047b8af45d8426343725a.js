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
      };var element = document.getElementById("e25e7785-9d8c-49f9-a66b-cd4d0d19f4a8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e25e7785-9d8c-49f9-a66b-cd4d0d19f4a8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"66121c67-31ab-4b75-9757-d96a8bc9d332":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"226a8685-b4fb-4546-89d9-2b5a6e300145","type":"Circle"},{"attributes":{},"id":"67ffa1a4-63be-43fb-ae6d-74cdd70bd425","type":"LinearScale"},{"attributes":{},"id":"e02eb2bf-d89b-4849-b0b7-b07498da30e3","type":"UnionRenderers"},{"attributes":{},"id":"f3973a42-852c-42df-a034-dabdef6ca669","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"dbdffbb0-3a8b-4019-a737-c2cb5b45790f","type":"LinearAxis"}],"left":[{"id":"4da6fd64-b74d-4e51-a8a1-a2644deedab6","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"dbdffbb0-3a8b-4019-a737-c2cb5b45790f","type":"LinearAxis"},{"id":"e0ac59d7-800b-448e-b94b-06d328726a3a","type":"Grid"},{"id":"4da6fd64-b74d-4e51-a8a1-a2644deedab6","type":"LinearAxis"},{"id":"714cff27-183c-4fd4-8b84-5f59c750c7b4","type":"Grid"},{"id":"2828d4e5-9ef3-471d-88fa-a11acdb9d8c6","type":"BoxAnnotation"},{"id":"7c78d11a-3de0-48da-84f0-b99ba68ae8ff","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"1f1d255d-9d2f-4085-808f-8d1342e018af","type":"Toolbar"},"x_range":{"id":"a06f4539-3c76-4b31-af9a-fb0427d321cb","type":"DataRange1d"},"x_scale":{"id":"09c45969-195d-4c14-9601-434a5ac58c81","type":"LinearScale"},"y_range":{"id":"d44803d4-d394-4c55-bdf5-a1e3181a4731","type":"DataRange1d"},"y_scale":{"id":"af393936-66c2-4ce9-80ee-51f37dcc5813","type":"LinearScale"}},"id":"a9aed901-3e14-43c2-bc7d-a8046fecc975","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"729bba03-8fd7-4a50-9878-0dc1a89c6b7f","type":"ResetTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"39835a6c-bbfc-4419-9668-1bead89c1654","type":"Selection"},"selection_policy":{"id":"e02eb2bf-d89b-4849-b0b7-b07498da30e3","type":"UnionRenderers"}},"id":"ff3dbf97-bb9d-4b64-8152-f40d30425a82","type":"ColumnDataSource"},{"attributes":{},"id":"ae73417e-a94d-4814-b51e-0be95f3d181f","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"ff3dbf97-bb9d-4b64-8152-f40d30425a82","type":"ColumnDataSource"}},"id":"0863cfc1-428d-459f-8eaa-cef8e7112532","type":"CDSView"},{"attributes":{"overlay":{"id":"2828d4e5-9ef3-471d-88fa-a11acdb9d8c6","type":"BoxAnnotation"}},"id":"51be6e71-72db-46e3-96c0-ab63317d8f73","type":"BoxZoomTool"},{"attributes":{},"id":"a45dff79-1ff3-4ce9-bacd-ffc63bff8a89","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6eb2c0c3-a707-473d-b8f2-cde0f5094d17","type":"Square"},{"attributes":{},"id":"5abe7fa4-f39d-4b69-9176-8cc7db70931e","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"a9aed901-3e14-43c2-bc7d-a8046fecc975","subtype":"Figure","type":"Plot"},"ticker":{"id":"0af00e28-22e8-4c34-9499-51233cf21778","type":"BasicTicker"}},"id":"714cff27-183c-4fd4-8b84-5f59c750c7b4","type":"Grid"},{"attributes":{"callback":null},"id":"f5042d85-6796-497e-bd29-ae3ca784b1d1","type":"DataRange1d"},{"attributes":{"children":[{"id":"5191c98b-78d2-4309-81cc-fae057b7e9c9","subtype":"Figure","type":"Plot"},{"id":"62b181eb-989f-4d44-ad28-b3dbb829e6f0","subtype":"Figure","type":"Plot"},{"id":"a9aed901-3e14-43c2-bc7d-a8046fecc975","subtype":"Figure","type":"Plot"}]},"id":"3e00c9cd-c8be-463b-86d6-f47474450637","type":"Row"},{"attributes":{"callback":null},"id":"a06f4539-3c76-4b31-af9a-fb0427d321cb","type":"DataRange1d"},{"attributes":{},"id":"a33afe06-fa2c-469f-b5cd-1e497993d88b","type":"HelpTool"},{"attributes":{"callback":null},"id":"3d61e83e-120d-4c32-8707-97e6652c6d78","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b6672445-f743-4984-8ae5-8a9cc44251a7","type":"Square"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"55060260-8a59-4f72-a3b1-a91573f0bb58","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6d83fa4b-79ab-4cf4-a60e-223147403214","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"1b3eeb4e-fd85-4ab4-91ff-05f7955c0a6e","type":"LinearAxis"}],"left":[{"id":"f63d6ae4-16c3-4bc1-bc84-6d3f3cf71ec2","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1b3eeb4e-fd85-4ab4-91ff-05f7955c0a6e","type":"LinearAxis"},{"id":"6749e45f-8a93-4011-b728-2fd2f78f9707","type":"Grid"},{"id":"f63d6ae4-16c3-4bc1-bc84-6d3f3cf71ec2","type":"LinearAxis"},{"id":"7946312a-1301-4800-a37d-2ab467898992","type":"Grid"},{"id":"369a7021-0a8d-4d54-a234-71e3e3b49f31","type":"BoxAnnotation"},{"id":"43df09b8-f3f3-4a1b-81d7-05f795a03110","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"7c4c7c09-7736-407f-a078-219208629364","type":"Toolbar"},"x_range":{"id":"3d61e83e-120d-4c32-8707-97e6652c6d78","type":"DataRange1d"},"x_scale":{"id":"39faa94e-d512-471a-a1e1-87c74b92430b","type":"LinearScale"},"y_range":{"id":"f5042d85-6796-497e-bd29-ae3ca784b1d1","type":"DataRange1d"},"y_scale":{"id":"5abe7fa4-f39d-4b69-9176-8cc7db70931e","type":"LinearScale"}},"id":"5191c98b-78d2-4309-81cc-fae057b7e9c9","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3ed83749-6599-4805-9c06-4bc677d71365","type":"Selection"},{"attributes":{},"id":"14c634f5-2771-43a4-b340-a9d871f8a9af","type":"ResetTool"},{"attributes":{"overlay":{"id":"6d83fa4b-79ab-4cf4-a60e-223147403214","type":"BoxAnnotation"}},"id":"3c6b3c74-1359-4c5b-b831-2ae7f650d21e","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"ff3dbf97-bb9d-4b64-8152-f40d30425a82","type":"ColumnDataSource"},"glyph":{"id":"b650c922-9a7a-4c9c-a342-ebaee1a4c059","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a97455b2-e5e3-4810-9040-6811531981e1","type":"Triangle"},"selection_glyph":null,"view":{"id":"0863cfc1-428d-459f-8eaa-cef8e7112532","type":"CDSView"}},"id":"944af5a8-9a3f-4f28-9710-9b6de062d771","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"369a7021-0a8d-4d54-a234-71e3e3b49f31","type":"BoxAnnotation"}},"id":"e470eb28-7522-4963-bece-308feb437dda","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"62b181eb-989f-4d44-ad28-b3dbb829e6f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"38ffa51a-c67c-4acf-8157-d7b9894e8940","type":"BasicTicker"}},"id":"6a6e9d56-19c9-4353-9c92-87454e15e43f","type":"Grid"},{"attributes":{},"id":"d52eb61e-d32c-48c6-b42b-2b43fe43df46","type":"SaveTool"},{"attributes":{"data_source":{"id":"cfdd67ed-3d5b-4dd3-9392-fc7fe1532fdc","type":"ColumnDataSource"},"glyph":{"id":"6eb2c0c3-a707-473d-b8f2-cde0f5094d17","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b6672445-f743-4984-8ae5-8a9cc44251a7","type":"Square"},"selection_glyph":null,"view":{"id":"b40355c3-f694-4cc4-8cf9-a9e6d3183da9","type":"CDSView"}},"id":"7c78d11a-3de0-48da-84f0-b99ba68ae8ff","type":"GlyphRenderer"},{"attributes":{"source":{"id":"cfdd67ed-3d5b-4dd3-9392-fc7fe1532fdc","type":"ColumnDataSource"}},"id":"b40355c3-f694-4cc4-8cf9-a9e6d3183da9","type":"CDSView"},{"attributes":{"below":[{"id":"221ba962-bc89-458f-b7d7-a42538dfcabc","type":"LinearAxis"}],"left":[{"id":"e9d8141c-3a88-4dfe-9826-2fdc8739732a","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"221ba962-bc89-458f-b7d7-a42538dfcabc","type":"LinearAxis"},{"id":"6a6e9d56-19c9-4353-9c92-87454e15e43f","type":"Grid"},{"id":"e9d8141c-3a88-4dfe-9826-2fdc8739732a","type":"LinearAxis"},{"id":"d885756a-1b01-46f0-986a-2f4633b665ea","type":"Grid"},{"id":"6d83fa4b-79ab-4cf4-a60e-223147403214","type":"BoxAnnotation"},{"id":"944af5a8-9a3f-4f28-9710-9b6de062d771","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"d21f3ed6-5de1-4497-a274-3c134bb3d551","type":"Toolbar"},"x_range":{"id":"d8e6b4d9-99d8-4287-b91c-0949d741d5b6","type":"DataRange1d"},"x_scale":{"id":"67ffa1a4-63be-43fb-ae6d-74cdd70bd425","type":"LinearScale"},"y_range":{"id":"271ff208-0b49-4ec2-99bc-e6bf694c90f4","type":"DataRange1d"},"y_scale":{"id":"21de9e89-cbe9-4d4a-80ba-bbc5c88ae059","type":"LinearScale"}},"id":"62b181eb-989f-4d44-ad28-b3dbb829e6f0","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"d8e6b4d9-99d8-4287-b91c-0949d741d5b6","type":"DataRange1d"},{"attributes":{},"id":"fcee0ca2-4a5e-4889-be03-5056da9aac1a","type":"PanTool"},{"attributes":{},"id":"7d2e8543-8494-4e66-bdcc-c7f88df676bd","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"61da340f-0cde-4251-81c8-d6bbbb1b059f","type":"PanTool"},{"id":"ff9c85d6-d035-41bb-8711-e1d441b7e61e","type":"WheelZoomTool"},{"id":"3c6b3c74-1359-4c5b-b831-2ae7f650d21e","type":"BoxZoomTool"},{"id":"a84313ec-d911-415e-8cde-c2a83ff6e314","type":"SaveTool"},{"id":"14c634f5-2771-43a4-b340-a9d871f8a9af","type":"ResetTool"},{"id":"561731b8-3e46-4e09-9e40-f23c2fb01c37","type":"HelpTool"}]},"id":"d21f3ed6-5de1-4497-a274-3c134bb3d551","type":"Toolbar"},{"attributes":{},"id":"3ea92b27-6168-4ec2-a75f-d14dac98ac67","type":"ResetTool"},{"attributes":{},"id":"8f0dc651-1758-47d2-bca0-8459a3e51e9d","type":"UnionRenderers"},{"attributes":{},"id":"af393936-66c2-4ce9-80ee-51f37dcc5813","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"62b181eb-989f-4d44-ad28-b3dbb829e6f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc0ddebd-d87c-49dc-9566-5a76fd08860d","type":"BasicTicker"}},"id":"d885756a-1b01-46f0-986a-2f4633b665ea","type":"Grid"},{"attributes":{},"id":"39faa94e-d512-471a-a1e1-87c74b92430b","type":"LinearScale"},{"attributes":{},"id":"aa67cb4e-496b-46cf-9b8d-735de88d5e40","type":"HelpTool"},{"attributes":{},"id":"ff9c85d6-d035-41bb-8711-e1d441b7e61e","type":"WheelZoomTool"},{"attributes":{},"id":"21de9e89-cbe9-4d4a-80ba-bbc5c88ae059","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"3ed83749-6599-4805-9c06-4bc677d71365","type":"Selection"},"selection_policy":{"id":"4feb887d-b68a-4f17-8327-3aea446316d7","type":"UnionRenderers"}},"id":"cfdd67ed-3d5b-4dd3-9392-fc7fe1532fdc","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"5191c98b-78d2-4309-81cc-fae057b7e9c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"299b795e-4aa0-4057-9049-4d7d85ca02ed","type":"BasicTicker"}},"id":"7946312a-1301-4800-a37d-2ab467898992","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a97455b2-e5e3-4810-9040-6811531981e1","type":"Triangle"},{"attributes":{},"id":"4feb887d-b68a-4f17-8327-3aea446316d7","type":"UnionRenderers"},{"attributes":{"plot":{"id":"5191c98b-78d2-4309-81cc-fae057b7e9c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d2e8543-8494-4e66-bdcc-c7f88df676bd","type":"BasicTicker"}},"id":"6749e45f-8a93-4011-b728-2fd2f78f9707","type":"Grid"},{"attributes":{},"id":"561731b8-3e46-4e09-9e40-f23c2fb01c37","type":"HelpTool"},{"attributes":{},"id":"a1401651-8f05-4187-9535-168ea18a3e26","type":"BasicTickFormatter"},{"attributes":{},"id":"38ffa51a-c67c-4acf-8157-d7b9894e8940","type":"BasicTicker"},{"attributes":{"formatter":{"id":"f7a03eac-d245-44a9-91e7-9ee95cf85c4e","type":"BasicTickFormatter"},"plot":{"id":"a9aed901-3e14-43c2-bc7d-a8046fecc975","subtype":"Figure","type":"Plot"},"ticker":{"id":"0af00e28-22e8-4c34-9499-51233cf21778","type":"BasicTicker"}},"id":"4da6fd64-b74d-4e51-a8a1-a2644deedab6","type":"LinearAxis"},{"attributes":{},"id":"82f65997-c884-4570-9f9c-ffde6b367fa1","type":"PanTool"},{"attributes":{},"id":"3795f6d1-1dea-4553-9aca-777a63f1d7c2","type":"BasicTickFormatter"},{"attributes":{},"id":"8c7f8e80-fd8f-4371-8e21-2a6c62a9d8ba","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"abe73723-4654-4e55-92e3-1ecefddd3a1b","type":"Selection"},"selection_policy":{"id":"8f0dc651-1758-47d2-bca0-8459a3e51e9d","type":"UnionRenderers"}},"id":"74a2cb29-74b6-4f46-a790-e92c462a6f54","type":"ColumnDataSource"},{"attributes":{},"id":"61da340f-0cde-4251-81c8-d6bbbb1b059f","type":"PanTool"},{"attributes":{"callback":null},"id":"d44803d4-d394-4c55-bdf5-a1e3181a4731","type":"DataRange1d"},{"attributes":{},"id":"abe73723-4654-4e55-92e3-1ecefddd3a1b","type":"Selection"},{"attributes":{},"id":"a84313ec-d911-415e-8cde-c2a83ff6e314","type":"SaveTool"},{"attributes":{},"id":"09c45969-195d-4c14-9601-434a5ac58c81","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"82f65997-c884-4570-9f9c-ffde6b367fa1","type":"PanTool"},{"id":"8c7f8e80-fd8f-4371-8e21-2a6c62a9d8ba","type":"WheelZoomTool"},{"id":"e470eb28-7522-4963-bece-308feb437dda","type":"BoxZoomTool"},{"id":"d52eb61e-d32c-48c6-b42b-2b43fe43df46","type":"SaveTool"},{"id":"729bba03-8fd7-4a50-9878-0dc1a89c6b7f","type":"ResetTool"},{"id":"a33afe06-fa2c-469f-b5cd-1e497993d88b","type":"HelpTool"}]},"id":"7c4c7c09-7736-407f-a078-219208629364","type":"Toolbar"},{"attributes":{},"id":"f7a03eac-d245-44a9-91e7-9ee95cf85c4e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"74a2cb29-74b6-4f46-a790-e92c462a6f54","type":"ColumnDataSource"},"glyph":{"id":"55060260-8a59-4f72-a3b1-a91573f0bb58","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"226a8685-b4fb-4546-89d9-2b5a6e300145","type":"Circle"},"selection_glyph":null,"view":{"id":"1f8d77b9-78bb-4b89-92d9-2476dfb9f787","type":"CDSView"}},"id":"43df09b8-f3f3-4a1b-81d7-05f795a03110","type":"GlyphRenderer"},{"attributes":{},"id":"39835a6c-bbfc-4419-9668-1bead89c1654","type":"Selection"},{"attributes":{},"id":"5f25f7e5-2ef5-4cca-a9d8-0ac5f9ed4675","type":"BasicTickFormatter"},{"attributes":{},"id":"0af00e28-22e8-4c34-9499-51233cf21778","type":"BasicTicker"},{"attributes":{},"id":"299b795e-4aa0-4057-9049-4d7d85ca02ed","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"fcee0ca2-4a5e-4889-be03-5056da9aac1a","type":"PanTool"},{"id":"f3973a42-852c-42df-a034-dabdef6ca669","type":"WheelZoomTool"},{"id":"51be6e71-72db-46e3-96c0-ab63317d8f73","type":"BoxZoomTool"},{"id":"a45dff79-1ff3-4ce9-bacd-ffc63bff8a89","type":"SaveTool"},{"id":"3ea92b27-6168-4ec2-a75f-d14dac98ac67","type":"ResetTool"},{"id":"aa67cb4e-496b-46cf-9b8d-735de88d5e40","type":"HelpTool"}]},"id":"1f1d255d-9d2f-4085-808f-8d1342e018af","type":"Toolbar"},{"attributes":{"formatter":{"id":"a1401651-8f05-4187-9535-168ea18a3e26","type":"BasicTickFormatter"},"plot":{"id":"5191c98b-78d2-4309-81cc-fae057b7e9c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"299b795e-4aa0-4057-9049-4d7d85ca02ed","type":"BasicTicker"}},"id":"f63d6ae4-16c3-4bc1-bc84-6d3f3cf71ec2","type":"LinearAxis"},{"attributes":{},"id":"dc0ddebd-d87c-49dc-9566-5a76fd08860d","type":"BasicTicker"},{"attributes":{"callback":null},"id":"271ff208-0b49-4ec2-99bc-e6bf694c90f4","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"369a7021-0a8d-4d54-a234-71e3e3b49f31","type":"BoxAnnotation"},{"attributes":{},"id":"c65c2cf3-a5dc-4381-9f7d-c4cdeec6ce4d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ae73417e-a94d-4814-b51e-0be95f3d181f","type":"BasicTickFormatter"},"plot":{"id":"a9aed901-3e14-43c2-bc7d-a8046fecc975","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f4dd4a7-cf5f-45ee-aed1-dce1c18f6669","type":"BasicTicker"}},"id":"dbdffbb0-3a8b-4019-a737-c2cb5b45790f","type":"LinearAxis"},{"attributes":{"source":{"id":"74a2cb29-74b6-4f46-a790-e92c462a6f54","type":"ColumnDataSource"}},"id":"1f8d77b9-78bb-4b89-92d9-2476dfb9f787","type":"CDSView"},{"attributes":{"formatter":{"id":"5f25f7e5-2ef5-4cca-a9d8-0ac5f9ed4675","type":"BasicTickFormatter"},"plot":{"id":"62b181eb-989f-4d44-ad28-b3dbb829e6f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"38ffa51a-c67c-4acf-8157-d7b9894e8940","type":"BasicTicker"}},"id":"221ba962-bc89-458f-b7d7-a42538dfcabc","type":"LinearAxis"},{"attributes":{"formatter":{"id":"c65c2cf3-a5dc-4381-9f7d-c4cdeec6ce4d","type":"BasicTickFormatter"},"plot":{"id":"62b181eb-989f-4d44-ad28-b3dbb829e6f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"dc0ddebd-d87c-49dc-9566-5a76fd08860d","type":"BasicTicker"}},"id":"e9d8141c-3a88-4dfe-9826-2fdc8739732a","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2828d4e5-9ef3-471d-88fa-a11acdb9d8c6","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a9aed901-3e14-43c2-bc7d-a8046fecc975","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f4dd4a7-cf5f-45ee-aed1-dce1c18f6669","type":"BasicTicker"}},"id":"e0ac59d7-800b-448e-b94b-06d328726a3a","type":"Grid"},{"attributes":{},"id":"9f4dd4a7-cf5f-45ee-aed1-dce1c18f6669","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3795f6d1-1dea-4553-9aca-777a63f1d7c2","type":"BasicTickFormatter"},"plot":{"id":"5191c98b-78d2-4309-81cc-fae057b7e9c9","subtype":"Figure","type":"Plot"},"ticker":{"id":"7d2e8543-8494-4e66-bdcc-c7f88df676bd","type":"BasicTicker"}},"id":"1b3eeb4e-fd85-4ab4-91ff-05f7955c0a6e","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b650c922-9a7a-4c9c-a342-ebaee1a4c059","type":"Triangle"}],"root_ids":["3e00c9cd-c8be-463b-86d6-f47474450637"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"66121c67-31ab-4b75-9757-d96a8bc9d332","roots":{"3e00c9cd-c8be-463b-86d6-f47474450637":"e25e7785-9d8c-49f9-a66b-cd4d0d19f4a8"}}];
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