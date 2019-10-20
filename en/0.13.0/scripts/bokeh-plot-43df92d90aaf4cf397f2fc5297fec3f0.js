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
      };var element = document.getElementById("1fd920a4-ed51-407d-9569-b0ad63b8896a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1fd920a4-ed51-407d-9569-b0ad63b8896a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"7ec13f50-b881-4351-ae30-3b91188ff8ef":{"roots":{"references":[{"attributes":{"source":{"id":"0f8ff84f-840c-488a-bd25-3d520a0989a4","type":"ColumnDataSource"}},"id":"44ab6664-ef2a-4f23-9095-80e4668e915e","type":"CDSView"},{"attributes":{},"id":"6607e705-4032-48f4-868f-efa142517fd4","type":"Selection"},{"attributes":{"callback":null},"id":"8445a781-5ba2-4cc4-88c9-8ca8ab028893","type":"DataRange1d"},{"attributes":{},"id":"6350140e-1082-4450-911e-53c1ed698034","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fa2a9e0f-aa80-4bd4-bf0e-f75e7797cfb4","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"83766906-f32f-48e3-8ac4-bb550115ec4c","type":"Circle"},{"attributes":{"data_source":{"id":"4ea1a45b-9296-4b24-8777-2bcc98f587a7","type":"ColumnDataSource"},"glyph":{"id":"aa506b4e-87be-45d5-9138-08aedd3b8c0a","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ddf35c68-3f0b-4ad1-9edd-9c1359a1a3cb","type":"Triangle"},"selection_glyph":null,"view":{"id":"4c3f4323-c96e-4f27-b009-6a4ef98a20bf","type":"CDSView"}},"id":"0e4905fe-1ab0-4dfe-89fc-87afd985589b","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"d4c19836-5ecf-465c-8750-4e827e8779e9","type":"BoxAnnotation"}},"id":"d4643a65-3f59-4950-a88b-6a0b07af785c","type":"BoxZoomTool"},{"attributes":{},"id":"ce1f534e-580b-43ec-99d0-7566c8529e8c","type":"Selection"},{"attributes":{"callback":null},"id":"ee0eae9b-7a51-4225-97b8-4b9a4b42801f","type":"DataRange1d"},{"attributes":{},"id":"d5ae493e-97bb-40a6-b353-a2202b717c5e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"05eb5f2d-992f-4e58-9c11-fc350e5077c4","type":"BasicTickFormatter"},"plot":{"id":"c84dc7b7-b1d7-4a43-a382-dca3c209b583","subtype":"Figure","type":"Plot"},"ticker":{"id":"6350140e-1082-4450-911e-53c1ed698034","type":"BasicTicker"}},"id":"aa9c3e31-98aa-4153-a855-04648084e764","type":"LinearAxis"},{"attributes":{},"id":"8eb326b8-c1a1-4ebf-8963-47b06915df5a","type":"HelpTool"},{"attributes":{},"id":"74545446-883f-4b54-8970-6f5e0297e946","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d4c19836-5ecf-465c-8750-4e827e8779e9","type":"BoxAnnotation"},{"attributes":{},"id":"3a3454b9-49d5-48bf-a414-65dde194e886","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"51c2291d-978e-41da-aa6c-5b47eb4ca046","type":"PanTool"},{"id":"9a91cb33-243d-42b9-9e01-3a30e908401a","type":"WheelZoomTool"},{"id":"f247f98a-1443-49ed-ba37-4792b01947e0","type":"BoxZoomTool"},{"id":"34503125-26e4-4751-9eaf-f28f2c1d8c7c","type":"SaveTool"},{"id":"e26d74c3-6ee1-4a41-bf48-c700a68fec63","type":"ResetTool"},{"id":"e8a90687-0f0c-45c2-9dd2-c52762b700ff","type":"HelpTool"}]},"id":"8258c8dc-2ef1-4402-a4b8-2becff021bf1","type":"Toolbar"},{"attributes":{"children":[{"id":"c84dc7b7-b1d7-4a43-a382-dca3c209b583","subtype":"Figure","type":"Plot"},{"id":"532fd863-0837-41cb-a73c-c2ad0167ab68","subtype":"Figure","type":"Plot"}]},"id":"cf858abe-69db-423a-9566-5e4b917cfce8","type":"Row"},{"attributes":{"data_source":{"id":"86854682-a648-4215-9326-e5ac90523184","type":"ColumnDataSource"},"glyph":{"id":"6eeff5a3-c62a-4121-9be3-c3ce17a60922","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"876b710c-0121-42e0-b392-bb3dc026ac01","type":"Square"},"selection_glyph":null,"view":{"id":"9f2bfbeb-f8f0-4e9c-9b8f-e6da25edf9a2","type":"CDSView"}},"id":"46f6587e-0ee5-4670-96a2-2904c7ed3285","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"77d9df5f-1e59-4d02-a15e-ec2a76382d42","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ddf35c68-3f0b-4ad1-9edd-9c1359a1a3cb","type":"Triangle"},{"attributes":{"below":[{"id":"f279152d-0517-4ede-aec6-62844d4c8041","type":"LinearAxis"}],"left":[{"id":"aa9c3e31-98aa-4153-a855-04648084e764","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"f279152d-0517-4ede-aec6-62844d4c8041","type":"LinearAxis"},{"id":"b978e7ac-14db-40ac-9de6-8a8875fdcfe1","type":"Grid"},{"id":"aa9c3e31-98aa-4153-a855-04648084e764","type":"LinearAxis"},{"id":"bf9eeefd-ed21-4ef2-a4a4-d3300c42028f","type":"Grid"},{"id":"d4c19836-5ecf-465c-8750-4e827e8779e9","type":"BoxAnnotation"},{"id":"f200c9a6-a457-4342-bf7b-ed17cefdd015","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"eb3bf159-28a0-47e6-89d2-00c2a25b8d83","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8445a781-5ba2-4cc4-88c9-8ca8ab028893","type":"DataRange1d"},"x_scale":{"id":"ab26d7e8-fafb-47a7-86dd-94d44e019caf","type":"LinearScale"},"y_range":{"id":"4c95a22f-823f-4660-9b6e-733b27180b53","type":"DataRange1d"},"y_scale":{"id":"bc965de7-e68b-4492-b404-4e5ccac3bc57","type":"LinearScale"}},"id":"c84dc7b7-b1d7-4a43-a382-dca3c209b583","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e26d74c3-6ee1-4a41-bf48-c700a68fec63","type":"ResetTool"},{"attributes":{"below":[{"id":"b514a955-292a-469e-ad53-66f7caf45e94","type":"LinearAxis"}],"left":[{"id":"b59f4838-a83d-4857-9e6a-96ec13db8d40","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b514a955-292a-469e-ad53-66f7caf45e94","type":"LinearAxis"},{"id":"cd7e3f5f-b0d9-4850-9a4d-1c44541673e2","type":"Grid"},{"id":"b59f4838-a83d-4857-9e6a-96ec13db8d40","type":"LinearAxis"},{"id":"ce5c387e-3313-4b88-b264-949d83878cbf","type":"Grid"},{"id":"fa2a9e0f-aa80-4bd4-bf0e-f75e7797cfb4","type":"BoxAnnotation"},{"id":"46f6587e-0ee5-4670-96a2-2904c7ed3285","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b5918aff-2315-4ac6-a237-da902d1e10b6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"77d9df5f-1e59-4d02-a15e-ec2a76382d42","type":"DataRange1d"},"x_scale":{"id":"4eed43a3-196f-4092-8c15-3b947d789264","type":"LinearScale"},"y_range":{"id":"b071c95e-d117-4c05-9d88-d1a7e536e63a","type":"DataRange1d"},"y_scale":{"id":"810c729a-acb7-4219-8ed2-d59f31ec4f8f","type":"LinearScale"}},"id":"9362cd02-9577-4896-ac40-5ad7c3fc1526","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"35fbae7f-47c6-4247-bee3-21053498d20d","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]},"selected":{"id":"6607e705-4032-48f4-868f-efa142517fd4","type":"Selection"},"selection_policy":{"id":"74545446-883f-4b54-8970-6f5e0297e946","type":"UnionRenderers"}},"id":"0f8ff84f-840c-488a-bd25-3d520a0989a4","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"0205a152-1a18-4ff7-9323-ab404e3bcd17","type":"BasicTickFormatter"},"plot":{"id":"532fd863-0837-41cb-a73c-c2ad0167ab68","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ec918e-5a7c-4cc6-a754-742c376fbe6a","type":"BasicTicker"}},"id":"de2970a6-832f-4802-ac72-0fc27d766603","type":"LinearAxis"},{"attributes":{},"id":"44144f2a-d030-475f-b383-ef1213cd3dfa","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"532fd863-0837-41cb-a73c-c2ad0167ab68","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa3b930f-f107-49cb-909f-7a7907108792","type":"BasicTicker"}},"id":"198bdffc-b1db-4ec0-8c07-e4dd58ce1c73","type":"Grid"},{"attributes":{"plot":{"id":"532fd863-0837-41cb-a73c-c2ad0167ab68","subtype":"Figure","type":"Plot"},"ticker":{"id":"30ec918e-5a7c-4cc6-a754-742c376fbe6a","type":"BasicTicker"}},"id":"ce11c4a0-71f1-4b5b-9a21-271409708535","type":"Grid"},{"attributes":{},"id":"d6aa5f6b-75a9-4581-962f-a3277abd3542","type":"PanTool"},{"attributes":{"formatter":{"id":"cef30b66-0738-45fe-bfe6-c95e6b769049","type":"BasicTickFormatter"},"plot":{"id":"532fd863-0837-41cb-a73c-c2ad0167ab68","subtype":"Figure","type":"Plot"},"ticker":{"id":"aa3b930f-f107-49cb-909f-7a7907108792","type":"BasicTicker"}},"id":"912272d7-2bbd-4c44-b8e1-0dd73d93f5ec","type":"LinearAxis"},{"attributes":{},"id":"30ec918e-5a7c-4cc6-a754-742c376fbe6a","type":"BasicTicker"},{"attributes":{},"id":"aa3b930f-f107-49cb-909f-7a7907108792","type":"BasicTicker"},{"attributes":{},"id":"9de247e5-f806-4d47-8407-cf8490c56815","type":"LinearScale"},{"attributes":{},"id":"9a91cb33-243d-42b9-9e01-3a30e908401a","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"0f8ff84f-840c-488a-bd25-3d520a0989a4","type":"ColumnDataSource"},"glyph":{"id":"83766906-f32f-48e3-8ac4-bb550115ec4c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35fbae7f-47c6-4247-bee3-21053498d20d","type":"Circle"},"selection_glyph":null,"view":{"id":"44ab6664-ef2a-4f23-9095-80e4668e915e","type":"CDSView"}},"id":"f200c9a6-a457-4342-bf7b-ed17cefdd015","type":"GlyphRenderer"},{"attributes":{},"id":"1e83dddc-3ce9-4197-ae10-19f88fc9e5a6","type":"LinearScale"},{"attributes":{"tools":[{"id":"d6aa5f6b-75a9-4581-962f-a3277abd3542","type":"PanTool"},{"id":"6234e1be-3855-42b0-b78f-f8e0330df4d6","type":"WheelZoomTool"},{"id":"d4643a65-3f59-4950-a88b-6a0b07af785c","type":"BoxZoomTool"},{"id":"eae5b770-89ee-4db0-a676-9a300dfd8b08","type":"SaveTool"},{"id":"44144f2a-d030-475f-b383-ef1213cd3dfa","type":"ResetTool"},{"id":"8eb326b8-c1a1-4ebf-8963-47b06915df5a","type":"HelpTool"},{"id":"51c2291d-978e-41da-aa6c-5b47eb4ca046","type":"PanTool"},{"id":"9a91cb33-243d-42b9-9e01-3a30e908401a","type":"WheelZoomTool"},{"id":"f247f98a-1443-49ed-ba37-4792b01947e0","type":"BoxZoomTool"},{"id":"34503125-26e4-4751-9eaf-f28f2c1d8c7c","type":"SaveTool"},{"id":"e26d74c3-6ee1-4a41-bf48-c700a68fec63","type":"ResetTool"},{"id":"e8a90687-0f0c-45c2-9dd2-c52762b700ff","type":"HelpTool"},{"id":"2de877c4-2a8f-4052-a521-d2964ec05c2b","type":"PanTool"},{"id":"7944d4a1-b80e-41b7-a087-32ae9646b383","type":"WheelZoomTool"},{"id":"9953867b-0ce8-4160-8527-14cf0de5a9a2","type":"BoxZoomTool"},{"id":"e8920c29-42b4-4bfc-bccc-cd3f4a11621c","type":"SaveTool"},{"id":"c649d842-dc97-4227-95ff-79418606d1bb","type":"ResetTool"},{"id":"41f2d1fb-6b01-4976-96e6-fb31c7b1018a","type":"HelpTool"}]},"id":"ff842176-5394-4bba-8a6f-58d294a7cb2e","type":"ProxyToolbar"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa506b4e-87be-45d5-9138-08aedd3b8c0a","type":"Triangle"},{"attributes":{},"id":"8f5e3942-8807-44f7-b390-feac52848f8d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1301ab11-5552-41a2-921b-27fe29ec9683","type":"DataRange1d"},{"attributes":{},"id":"05eb5f2d-992f-4e58-9c11-fc350e5077c4","type":"BasicTickFormatter"},{"attributes":{},"id":"6234e1be-3855-42b0-b78f-f8e0330df4d6","type":"WheelZoomTool"},{"attributes":{},"id":"0205a152-1a18-4ff7-9323-ab404e3bcd17","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"86854682-a648-4215-9326-e5ac90523184","type":"ColumnDataSource"}},"id":"9f2bfbeb-f8f0-4e9c-9b8f-e6da25edf9a2","type":"CDSView"},{"attributes":{"height":250,"width":250},"id":"d3bafefa-c8e6-4800-a318-c478122f791e","type":"Spacer"},{"attributes":{"callback":null},"id":"4c95a22f-823f-4660-9b6e-733b27180b53","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]},"selected":{"id":"ce1f534e-580b-43ec-99d0-7566c8529e8c","type":"Selection"},"selection_policy":{"id":"686320ba-87e4-4e1f-a7a6-02ed54491f43","type":"UnionRenderers"}},"id":"86854682-a648-4215-9326-e5ac90523184","type":"ColumnDataSource"},{"attributes":{},"id":"3a587cef-50ba-4dd1-88bf-d80096745856","type":"BasicTicker"},{"attributes":{},"id":"bc965de7-e68b-4492-b404-4e5ccac3bc57","type":"LinearScale"},{"attributes":{},"id":"686320ba-87e4-4e1f-a7a6-02ed54491f43","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"ff842176-5394-4bba-8a6f-58d294a7cb2e","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"269b2a80-13b3-4f0a-bd55-bf83dfa1a3d8","type":"ToolbarBox"},{"attributes":{"plot":{"id":"c84dc7b7-b1d7-4a43-a382-dca3c209b583","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a587cef-50ba-4dd1-88bf-d80096745856","type":"BasicTicker"}},"id":"b978e7ac-14db-40ac-9de6-8a8875fdcfe1","type":"Grid"},{"attributes":{"children":[{"id":"d3bafefa-c8e6-4800-a318-c478122f791e","type":"Spacer"},{"id":"9362cd02-9577-4896-ac40-5ad7c3fc1526","subtype":"Figure","type":"Plot"}]},"id":"e39f81e3-9802-444c-9ccb-3671731e2e82","type":"Row"},{"attributes":{},"id":"ab26d7e8-fafb-47a7-86dd-94d44e019caf","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"c84dc7b7-b1d7-4a43-a382-dca3c209b583","subtype":"Figure","type":"Plot"},"ticker":{"id":"6350140e-1082-4450-911e-53c1ed698034","type":"BasicTicker"}},"id":"bf9eeefd-ed21-4ef2-a4a4-d3300c42028f","type":"Grid"},{"attributes":{"formatter":{"id":"8f5e3942-8807-44f7-b390-feac52848f8d","type":"BasicTickFormatter"},"plot":{"id":"c84dc7b7-b1d7-4a43-a382-dca3c209b583","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a587cef-50ba-4dd1-88bf-d80096745856","type":"BasicTicker"}},"id":"f279152d-0517-4ede-aec6-62844d4c8041","type":"LinearAxis"},{"attributes":{"children":[{"id":"cf858abe-69db-423a-9566-5e4b917cfce8","type":"Row"},{"id":"e39f81e3-9802-444c-9ccb-3671731e2e82","type":"Row"}]},"id":"da2e3e7b-4780-4e93-9d83-cf315048bf69","type":"Column"},{"attributes":{},"id":"e8920c29-42b4-4bfc-bccc-cd3f4a11621c","type":"SaveTool"},{"attributes":{},"id":"2de877c4-2a8f-4052-a521-d2964ec05c2b","type":"PanTool"},{"attributes":{},"id":"f4a6386d-2615-4d22-aaba-731067515039","type":"UnionRenderers"},{"attributes":{"below":[{"id":"de2970a6-832f-4802-ac72-0fc27d766603","type":"LinearAxis"}],"left":[{"id":"912272d7-2bbd-4c44-b8e1-0dd73d93f5ec","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"de2970a6-832f-4802-ac72-0fc27d766603","type":"LinearAxis"},{"id":"ce11c4a0-71f1-4b5b-9a21-271409708535","type":"Grid"},{"id":"912272d7-2bbd-4c44-b8e1-0dd73d93f5ec","type":"LinearAxis"},{"id":"198bdffc-b1db-4ec0-8c07-e4dd58ce1c73","type":"Grid"},{"id":"5b60073d-b3d1-437e-acb8-e969343e05d2","type":"BoxAnnotation"},{"id":"0e4905fe-1ab0-4dfe-89fc-87afd985589b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"8258c8dc-2ef1-4402-a4b8-2becff021bf1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ee0eae9b-7a51-4225-97b8-4b9a4b42801f","type":"DataRange1d"},"x_scale":{"id":"1e83dddc-3ce9-4197-ae10-19f88fc9e5a6","type":"LinearScale"},"y_range":{"id":"1301ab11-5552-41a2-921b-27fe29ec9683","type":"DataRange1d"},"y_scale":{"id":"9de247e5-f806-4d47-8407-cf8490c56815","type":"LinearScale"}},"id":"532fd863-0837-41cb-a73c-c2ad0167ab68","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"fa2a9e0f-aa80-4bd4-bf0e-f75e7797cfb4","type":"BoxAnnotation"}},"id":"9953867b-0ce8-4160-8527-14cf0de5a9a2","type":"BoxZoomTool"},{"attributes":{},"id":"7944d4a1-b80e-41b7-a087-32ae9646b383","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"876b710c-0121-42e0-b392-bb3dc026ac01","type":"Square"},{"attributes":{},"id":"41f2d1fb-6b01-4976-96e6-fb31c7b1018a","type":"HelpTool"},{"attributes":{},"id":"34503125-26e4-4751-9eaf-f28f2c1d8c7c","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"9362cd02-9577-4896-ac40-5ad7c3fc1526","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea7df197-f531-4e0e-ad37-3541606992de","type":"BasicTicker"}},"id":"ce5c387e-3313-4b88-b264-949d83878cbf","type":"Grid"},{"attributes":{"source":{"id":"4ea1a45b-9296-4b24-8777-2bcc98f587a7","type":"ColumnDataSource"}},"id":"4c3f4323-c96e-4f27-b009-6a4ef98a20bf","type":"CDSView"},{"attributes":{},"id":"4503f2f7-7a85-466f-9b14-9c015342c7c0","type":"BasicTicker"},{"attributes":{},"id":"c649d842-dc97-4227-95ff-79418606d1bb","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6aa5f6b-75a9-4581-962f-a3277abd3542","type":"PanTool"},{"id":"6234e1be-3855-42b0-b78f-f8e0330df4d6","type":"WheelZoomTool"},{"id":"d4643a65-3f59-4950-a88b-6a0b07af785c","type":"BoxZoomTool"},{"id":"eae5b770-89ee-4db0-a676-9a300dfd8b08","type":"SaveTool"},{"id":"44144f2a-d030-475f-b383-ef1213cd3dfa","type":"ResetTool"},{"id":"8eb326b8-c1a1-4ebf-8963-47b06915df5a","type":"HelpTool"}]},"id":"eb3bf159-28a0-47e6-89d2-00c2a25b8d83","type":"Toolbar"},{"attributes":{},"id":"51c2291d-978e-41da-aa6c-5b47eb4ca046","type":"PanTool"},{"attributes":{"formatter":{"id":"3a3454b9-49d5-48bf-a414-65dde194e886","type":"BasicTickFormatter"},"plot":{"id":"9362cd02-9577-4896-ac40-5ad7c3fc1526","subtype":"Figure","type":"Plot"},"ticker":{"id":"4503f2f7-7a85-466f-9b14-9c015342c7c0","type":"BasicTicker"}},"id":"b514a955-292a-469e-ad53-66f7caf45e94","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5b60073d-b3d1-437e-acb8-e969343e05d2","type":"BoxAnnotation"},{"attributes":{},"id":"7d69e82e-09fd-402b-9359-2fe8327ef1b8","type":"Selection"},{"attributes":{"plot":{"id":"9362cd02-9577-4896-ac40-5ad7c3fc1526","subtype":"Figure","type":"Plot"},"ticker":{"id":"4503f2f7-7a85-466f-9b14-9c015342c7c0","type":"BasicTicker"}},"id":"cd7e3f5f-b0d9-4850-9a4d-1c44541673e2","type":"Grid"},{"attributes":{},"id":"810c729a-acb7-4219-8ed2-d59f31ec4f8f","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]},"selected":{"id":"7d69e82e-09fd-402b-9359-2fe8327ef1b8","type":"Selection"},"selection_policy":{"id":"f4a6386d-2615-4d22-aaba-731067515039","type":"UnionRenderers"}},"id":"4ea1a45b-9296-4b24-8777-2bcc98f587a7","type":"ColumnDataSource"},{"attributes":{},"id":"eae5b770-89ee-4db0-a676-9a300dfd8b08","type":"SaveTool"},{"attributes":{},"id":"cef30b66-0738-45fe-bfe6-c95e6b769049","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"269b2a80-13b3-4f0a-bd55-bf83dfa1a3d8","type":"ToolbarBox"},{"id":"da2e3e7b-4780-4e93-9d83-cf315048bf69","type":"Column"}]},"id":"0548f6aa-9f11-47c7-a149-e6b2cd911c34","type":"Column"},{"attributes":{},"id":"e8a90687-0f0c-45c2-9dd2-c52762b700ff","type":"HelpTool"},{"attributes":{"callback":null},"id":"b071c95e-d117-4c05-9d88-d1a7e536e63a","type":"DataRange1d"},{"attributes":{},"id":"4eed43a3-196f-4092-8c15-3b947d789264","type":"LinearScale"},{"attributes":{},"id":"ea7df197-f531-4e0e-ad37-3541606992de","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2de877c4-2a8f-4052-a521-d2964ec05c2b","type":"PanTool"},{"id":"7944d4a1-b80e-41b7-a087-32ae9646b383","type":"WheelZoomTool"},{"id":"9953867b-0ce8-4160-8527-14cf0de5a9a2","type":"BoxZoomTool"},{"id":"e8920c29-42b4-4bfc-bccc-cd3f4a11621c","type":"SaveTool"},{"id":"c649d842-dc97-4227-95ff-79418606d1bb","type":"ResetTool"},{"id":"41f2d1fb-6b01-4976-96e6-fb31c7b1018a","type":"HelpTool"}]},"id":"b5918aff-2315-4ac6-a237-da902d1e10b6","type":"Toolbar"},{"attributes":{"overlay":{"id":"5b60073d-b3d1-437e-acb8-e969343e05d2","type":"BoxAnnotation"}},"id":"f247f98a-1443-49ed-ba37-4792b01947e0","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"d5ae493e-97bb-40a6-b353-a2202b717c5e","type":"BasicTickFormatter"},"plot":{"id":"9362cd02-9577-4896-ac40-5ad7c3fc1526","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea7df197-f531-4e0e-ad37-3541606992de","type":"BasicTicker"}},"id":"b59f4838-a83d-4857-9e6a-96ec13db8d40","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6eeff5a3-c62a-4121-9be3-c3ce17a60922","type":"Square"}],"root_ids":["0548f6aa-9f11-47c7-a149-e6b2cd911c34"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"7ec13f50-b881-4351-ae30-3b91188ff8ef","roots":{"0548f6aa-9f11-47c7-a149-e6b2cd911c34":"1fd920a4-ed51-407d-9569-b0ad63b8896a"}}];
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